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
};

module.exports = userRepository;