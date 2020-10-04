const validator = require('validator');

exports.userValidation = user => {
    if(user.first_name)
        if (user.first_name.length < 3) throw new Error("Firstname is too short. Atleast 3 character required");
    if(user.last_name)
        if (user.last_name.length < 3) throw new Error("Lastname is too short. Atleast 3 character required");
    if(user.email)
        if (!validator.default.isEmail(user.email)) throw new Error("Not valid Email");
    if(user.password)
        if (user.password.length < 5) throw new Error("Password length atleast 6 character.");
    if(user.phone){
        if(user.password.length < 10) throw new Error('Not valid phone number');
        if(!validator.default.isNumeric(user.phone)) throw new Error('Not valid phone number');
    }
}