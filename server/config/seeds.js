const db = require('./connection');
const { User, Book, Genre } = require('../models');

db.once('open', async () => {
  await Genre.deleteMany();

  const genres = await Genre.insertMany([
    { name: 'Young Adult' },
    { name: 'Fiction' },
    { name: 'Poop' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('genres seeded');

  await Book.deleteMany();

  const books = await Book.insertMany([
    {
      name: `Harry Potter and the Socerer's Stone`,
      description:
        `In Harry Potter and the Sorcerer's Stone, Harry, an orphan, lives with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. One day just before his eleventh birthday, an owl tries to deliver a mysterious letter?the first of a sequence of events that end in Harry meeting a giant man named Hagrid. Hagrid explains Harry's history to him: When he was a baby, the Dark wizard, Lord Voldemort, attacked and killed his parents in an attempt to kill Harry; but the only mark on Harry was a mysterious lightning-bolt scar on his forehead. Now he has been invited to attend Hogwarts School of Witchcraft and Wizardry, where the headmaster is the great wizard Albus Dumbledore. Harry visits Diagon Alley to get his school supplies, especially his very own wand. To get to school, he takes the Hogwarts Express from platform nine and three-quarters at King's Cross Station. On the train, he meets two fellow students who will become his closest friends: Ron Weasley and Hermione Granger. Harry is assigned to Gryffindor House at Hogwarts, and soon becomes the youngest-ever Seeker on the House Quidditch team. He also studies Potions with Professor Severus Snape, who displays a deep and abiding dislike for Harry, and Defense Against the Dark Arts with nervous Professor Quirrell; he and his friends defeat a mountain troll, help Hagrid raise a dragon, and explore the wonderful, fascinating world of Hogwarts. But all events lead irrevocably toward a second encounter with Lord Voldemort, who seeks an object of legend known as the Sorcerer's Stone`,
      image: 'HpSS.jpeg',
      genre: genres[0],
      price: 2.99,
      quantity: 500
    },
    {
      name: `Tools of Titans`,
      description:
        `Tools of Titans is a book written by Tim Ferriss, a bestselling author, entrepreneur, and podcast host. The book is a compilation of tactics, routines, and habits of high-performing individuals, including business leaders, athletes, and celebrities, which Ferriss has gathered from his podcast, "The Tim Ferriss Show". The book covers topics such as productivity, health, and wealth, and provides insights and actionable advice on how to optimize one's life. It's a comprehensive guide aimed at helping readers improve their personal and professional lives by adopting the habits and strategies of successful individuals.`,
      image: 'tt.jpeg',
      genre: genres[0],
      price: 1.99,
      quantity: 500
    },
    {
      name: `The Alchemist`,
      genre: genres[1],
      description:
      `The Alchemist is a novel written by Paulo Coelho, a Brazilian author. It was first published in 1988 and has since become a worldwide bestseller. The book follows the journey of Santiago, a shepherd boy who dreams of discovering a treasure as old as the universe. The story is a blend of adventure, self-discovery, and spiritual enlightenment, and it explores themes of personal growth, the pursuit of one's destiny, and the power of the universe to guide and fulfill our lives. Through Santiago's journey, the reader is inspired to follow their own personal legend and find joy, fulfillment, and wisdom along the way. The book has been widely acclaimed for its simple yet profound message, and its ability to inspire readers to seek their own path in life.`,
      image: 'alch.jpeg',
      price: 7.99,
      quantity: 20
    },
    {
      name: `The Da Vinci Code`,
      genre: genres[1],
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'dacode.jpeg',
      price: 3.99,
      quantity: 50
    },
    {
      name: `The Richest Man in Babylon`,
      genre: genres[1],
      description:
      `The Da Vinci Code is a mystery-detective novel written by Dan Brown. It was first published in 2003 and became a global bestseller. The book follows the story of symbologist Robert Langdon as he investigates a murder at the Louvre Museum in Paris and uncovers a conspiracy to protect the secret of the Holy Grail. The novel combines elements of conspiracy theories, religious symbolism, and codes to create a fast-paced and suspenseful storyline that takes the reader on a journey through the hidden world of secret societies and ancient conspiracies. Along the way, Langdon and his companion, Sophie Neveu, uncover a secret that could shake the foundations of Western civilization and challenge the traditional view of history. The book has been both praised for its imaginative plot and criticized for its historical inaccuracies and controversial subject matter. Regardless, "The Da Vinci Code" remains a popular and widely-read book, and has been adapted into a feature film.`,
      image: 'babylon.jpeg',
      price: 14.99,
      quantity: 100
    },
    {
      name: `Atomic Habits`,
      genre: genres[2],
      description:
      `Atomic Habits is a self-help book written by James Clear. It was published in 2018 and has since become a popular resource for individuals seeking to improve their habits and achieve their goals. The book focuses on the idea that small, incremental changes to one's behavior can lead to significant improvements in life. Clear provides practical advice and strategies for developing and maintaining habits, and he emphasizes the importance of focusing on process rather than outcome. He also explains how habits work and how to break bad habits and replace them with good ones. The book covers a range of topics, including health, productivity, relationships, and personal finance, and provides a framework for designing and maintaining habits that support one's goals. With its emphasis on the power of small changes and its practical approach, "Atomic Habits" has been praised by readers as a valuable and accessible guide to habit change.`,
      image: 'atomic.jpeg',
      price: 399.99,
      quantity: 30
    },
    {
      name: `The 48 Laws of Power`,
      genre: genres[2],
      description:
      `The 48 Laws of Power is a book written by Robert Greene. It was first published in 1998 and has since become a widely-read book on power and strategy. The book is a collection of 48 laws, or principles, that have been used throughout history by individuals seeking to gain and maintain power. The laws range from the devious, such as "Conceal Your Intentions," to the more ethical, such as "Think As You Like But Behave Like Others." The book provides historical examples to illustrate each law and offers guidance on how to apply these principles in the modern world. The book has been described as a guide for navigating the complex and often ruthless world of power and politics, and it has been both praised for its insight and criticized for its ruthless and Machiavellian philosophy. Regardless, "The 48 Laws of Power" remains a popular and widely-read book, and has been referred to as a classic in the field of power and strategy.`,
      image: 'pwer.jpeg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      genre: genres[3],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      genre: genres[4],
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      genre: genres[4],
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      genre: genres[4],
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      genre: genres[4],
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('books seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        books: [books[0]._id, books[0]._id, books[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
