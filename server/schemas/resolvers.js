const { AuthenticationError } = require('apollo-server-express');
const { User, Book, Genre, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    genres: async () => {
      return await Genre.find();
    },
    genres: async (parent, { genre, name }) => {
      const params = {};

      if (genre) {
        params.genre = genre;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Book.find(params).populate('genre');
    },
    product: async (parent, { _id }) => {
      return await Book.findById(_id).populate('genre');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'genres.genres',
          populate: 'genre'
        });

        user.genres.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    genre: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'genres.genres',
          populate: 'genre'
        });

        return user.genres.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const genre = new Order({ genres: args.genres });
      const line_items = [];

      const { genres } = await genre.populate('genres');

      for (let i = 0; i < genres.length; i++) {
        const product = await stripe.genres.create({
          name: genres[i].name,
          description: genres[i].description,
          images: [`${url}/images/${genres[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: genres[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { genres }, context) => {
      console.log(context);
      if (context.user) {
        const genre = new Order({ genres });

        await User.findByIdAndUpdate(context.user._id, { $push: { genres: genre } });

        return genre;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateBook: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Book.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
