const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  user: {
    type: String,
    ref: 'User',
    required: true,
    trim: true
  },
  text: {
    type: String
  },
  likes: {
    type: Number
  },
  dislikes: {
    type: Number
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
