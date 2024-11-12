const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');

class userService {
    constructor() {
        this.userRepository = new UserRepository();
    };
    async userModel(data) {
        const userDetails = {
            username: data.username,
            email: data.email,
        }
        userDetails.password = await bcrypt.hashSync(data.password, bcrypt.genSaltSync(8));
        return userDetails;
    };
    async isUserExist(email) {
        const user = await this.userRepository.getUserBy({email});
        if(user) {
            return true;
        } else {
            return false;
        }
    };

    async registerUser(data) {
        try {
            const userExist = await this.isUserExist(data.email);
            if(userExist) throw new Error("Email already used!!!! Type new email");
            const userDetails = await this.userModel(data);
            const user = await this.userRepository.createUser(userDetails);
            return user;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = userService;