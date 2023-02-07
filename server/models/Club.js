const mongoose = require('mongoose');

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
  Users: {
    type: Array
  },
  Private: {
    type: Boolean,
    min: 0,
    default: 0
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genre',
    required: true
  },
  Comments: {
    type: Schema.Types.Array
  }
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;
