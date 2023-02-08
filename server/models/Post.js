const mongoose = require('mongoose');
const User = require('./User');
const Club = require('./Club')

const { Schema } = mongoose;

const postSchema = new Schema({
  text: {
    type: String
  },
  user: {
    type: String,
    ref: "User"
  },
  likes: {
    type: Number
  },
  dislikes: {
    type: Number
  },

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
