const UserService = require('../services/user-service');

const userService = new UserService();

const registerUser = async (req, res) => {
    try {
        const response = await userService.registerUser(req.body);
        res.status(201).json({
            success: true,
            message: 'user created successfully',
            data: response,
            error: {},
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            error: error.message,
        });
    }
};

module.exports = {
    registerUser,
}