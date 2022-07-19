const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const tripSchema = new Schema({
  destinationName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  activities: [
    {
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      category: {
        // TODO: Change from custom string to a fixed list of categories for user to choose from.
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        trim: true,
      },
      name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        trim: true,
      },
      link: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 300,
        trim: true,
      }
    }
  ]
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;
