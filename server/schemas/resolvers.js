const { AuthenticationError } = require('apollo-server-express');
const { text } = require('express');
const { User, Book, Genre, Order, Club, Post } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    genres: async () => {
      return await Genre.find();
    },
    clubs: async () => {
      return await Club.find().populate("book");
    },
    club: async (parent, { _id }) => {
      return await Club.findById(_id);
    },
    posts: async () => {
      return await Post.find();
    },
    books: async (parent, { genre, name }) => {
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
    book: async (parent, { _id }) => {
      return await Book.findById(_id).populate('genre');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.books',
          populate: 'genre'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.books',
          populate: 'genre'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ books: args.books });
      const line_items = [];

      const { books } = await order.populate('books');

      for (let i = 0; i < books.length; i++) {
        const book = await stripe.books.create({
          name: books[i].name,
          description: books[i].description,
          images: [`${url}/images/${books[i].image}`]
        });

        const price = await stripe.prices.create({
          book: book.id,
          unit_amount: books[i].price * 100,
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
    // addClub: async (parent, args) => {
    //   const club = await Club.create(args);
      
    //   return club;
    // },
    addOrder: async (parent, { books }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ books });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
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
    addPost: async ( parent, {user, text} ) => {
      console.log(user)
      console.log(text)
      return await Post.create( {user, text} )
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
