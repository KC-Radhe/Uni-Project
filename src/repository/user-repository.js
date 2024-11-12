const User = require('../models/user');

class userRepository {
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    };

    async getUserBy(elem) {
        try {
            const user = await User.findOne(elem);
            return user;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userRepository;