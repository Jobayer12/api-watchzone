const {getAllUsers, createLocalUser, localUserLogin, updateUserInfo} = require('../service/user.service');

exports.getAllUser = async (req, res) => {
    const response = {data: null, message: null, statusCode: 200}
    try {
        response.data = await getAllUsers();
    } catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}

exports.createLocalUser = async (req, res) => {
    const response = {data: null, message: null, statusCode: 200}
    try {
        response.data = await createLocalUser(req.body);
    } catch (e) {
        response.statusCode = 400;
        response.message = e.message;
    }
    return res.status(response.statusCode).json(response);
}

exports.login = async (req, res) => {
    const response = {data: null, message: '', statusCode: 200}
    try {
        response.data = await localUserLogin(req.body);
    } catch (event) {
        response.statusCode = 400;
        response.message = event.message;
    }
    return res.status(response.statusCode).json(response);
}

exports.updateUserInfo = async (req, res) => {
    const response = {data: null, message: '', statusCode: 200}
    try {
        response.data = await updateUserInfo(req.loggedInUserInfo.id, req.body);
    } catch (event) {
        response.statusCode = 400;
        response.message = event.message;
    }
    return res.status(response.statusCode).json(response);
}