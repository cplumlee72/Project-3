const db = require("./connection");
const { User, Book, Genre, Club, Post } = require("../models");

db.once("open", async () => {
  await Genre.deleteMany();

  const genres = await Genre.insertMany([
    { name: "Young Adult" },
    { name: "Fiction" },
    { name: "Poop" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  await Club.deleteMany();

  console.log("genres seeded");

  await Book.deleteMany();

  const books = await Book.insertMany([
    {
      name: `Harry Potter and the Socerer's Stone`,
      description: `In Harry Potter and the Sorcerer's Stone, Harry, an orphan, lives with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. One day just before his eleventh birthday, an owl tries to deliver a mysterious letter?the first of a sequence of events that end in Harry meeting a giant man named Hagrid. Hagrid explains Harry's history to him: When he was a baby, the Dark wizard, Lord Voldemort, attacked and killed his parents in an attempt to kill Harry; but the only mark on Harry was a mysterious lightning-bolt scar on his forehead. Now he has been invited to attend Hogwarts School of Witchcraft and Wizardry, where the headmaster is the great wizard Albus Dumbledore. Harry visits Diagon Alley to get his school supplies, especially his very own wand. To get to school, he takes the Hogwarts Express from platform nine and three-quarters at King's Cross Station. On the train, he meets two fellow students who will become his closest friends: Ron Weasley and Hermione Granger. Harry is assigned to Gryffindor House at Hogwarts, and soon becomes the youngest-ever Seeker on the House Quidditch team. He also studies Potions with Professor Severus Snape, who displays a deep and abiding dislike for Harry, and Defense Against the Dark Arts with nervous Professor Quirrell; he and his friends defeat a mountain troll, help Hagrid raise a dragon, and explore the wonderful, fascinating world of Hogwarts. But all events lead irrevocably toward a second encounter with Lord Voldemort, who seeks an object of legend known as the Sorcerer's Stone`,
      image: "cookie-tin.jpg",
      genre: genres[0],
      price: 2.99,
      quantity: 500,
    },
    {
      name: "Canned Coffee",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "canned-coffee.jpg",
      genre: genres[0],
      price: 1.99,
      quantity: 500,
    },
    {
      name: "Toilet Paper",
      genre: genres[1],
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "toilet-paper.jpg",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Handmade Soap",
      genre: genres[1],
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "soap.jpg",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Set of Wooden Spoons",
      genre: genres[1],
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "wooden-spoons.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Camera",
      genre: genres[2],
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "camera.jpg",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Tablet",
      genre: genres[2],
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "tablet.jpg",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Tales at Bedtime",
      genre: genres[3],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "bedtime-book.jpg",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Spinning Top",
      genre: genres[4],
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "spinning-top.jpg",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "Set of Plastic Horses",
      genre: genres[4],
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "plastic-horses.jpg",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: "Teddy Bear",
      genre: genres[4],
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "teddy-bear.jpg",
      price: 7.99,
      quantity: 100,
    },
    {
      name: "Alphabet Blocks",
      genre: genres[4],
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 9.99,
      quantity: 600,
    },
  ]);

  console.log("books seeded");

  await User.deleteMany();

  const users = await User.insertMany([
    {
      userName: "Pamela",
      email: "pamela@testmail.com",
      password: "password12345",
      orders: [
        {
          books: [books[0]._id, books[0]._id, books[1]._id],
        },
      ],
    },
    {
      userName: "Elijah",
      email: "eholt@goobermail.com",
      password: "password12345",
      orders: [
        {
          books: [books[0]._id, books[0]._id, books[1]._id],
        },
      ],
    },
  ],
  );

  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      text: "ur dumb idiot",
      user: users[1],
      likes: 3,
      dislikes: 500,
    },
    {
      text: "UWU DADDY",
      user: users[0],
      likes: 6000,
      dislikes: 1,
    },
  ]);

  const clubs = await Club.create([
    {
      name: "bababa",
      image: "beeping",
      description: "this does stuff",
      Users: ["Reggie", "jerry"],
      admins: ["Reggie"],
      private: false,
      book: books[1],
      posts: [posts[0]],
    },
  ]);

  console.log("users seeded");

  process.exit();
});
