const mongoose = require('mongoose');
const User = require('./User')

const { Schema } = mongoose;

const postSchema = new Schema({
  text: {
    type: String
  },
  User: [User.schema],
  likes: {
    type: Number
  },
  dislikes: {
    type: Number
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
