const UserRepository = require('../repository/user-repository');

class userService {
    constructor() {
        this.userRepository = new UserRepository();
    };
    async registerUser(data) {
        try {
            const userDetails = {
                username: data.username,
                email: data.email,
            }
            userDetails.password = data.password;
            const user = await this.userRepository.createUser(userDetails);
            return user;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = userService;