const mongoose = require('mongoose');
const User = require('./User');
const  Post  = require('./Post');

const { Schema } = mongoose;

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  users: {
    type: [User.schema]
  },
  locked: {
    type: Boolean,
  },
  admins: {
    type: [User.schema],
  },
  book: {
    type: String,
    ref: 'Book',
    required: true
  },
  posts: {
    type: Array,
    ref: 'Post'
  }


});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;
