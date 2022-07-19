const { AuthenticationError } = require('apollo-server-express');
const { User, Trip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('trips');
    },
    trips: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Trip.find(params).sort({ createdAt: -1 });
    },
    trip: async (parent, { tripId }) => {
      return Trip.findOne({ _id: tripId }).populate('activities');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials. Try again.');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTrip: async (parent, { destinationName }, context) => {
      if (context.user) {
        const trip = await Trip.create({
          destinationName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trips: trip._id } }
        );

        return trip;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addActivity: async (parent, { tripId, category, name, link }, context) => {
      if (context.user) {
        return await Trip.findOneAndUpdate(
          { _id: tripId },
          {
            $addToSet: {
              activities: { category, name, link }
            }
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
