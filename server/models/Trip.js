const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// each trip has a destinationName and days
// days is an array of days
// each day has a collection of activities
// each activity has category, name, and URL

const tripSchema = new Schema({
  destinationName: {
    type: String,
    // Can you make required a custom message to display to user if not provided?
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
  days: [
    {
      activites: [
        {
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
      ],
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;
