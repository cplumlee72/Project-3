const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  User: {
    type: String,
    required: true,
    trim: true
  },
  Text: {
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
