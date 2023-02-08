const mongoose = require('mongoose');
const User = require('./User');
const Club = require('./Club')

const { Schema } = mongoose;

const postSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
