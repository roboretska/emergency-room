import mongoose from "mongoose";
import '../models/User.js';
import config from '../../config/config.json';

const User = mongoose.model('User');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.user}`);

}

export function addUser(name, password) {
    setUpConnection();
    const user = new User({
        username:   name,
        password: password
    });

    return user.save();
}

export function checkUser(username){
    setUpConnection();
    console.log(username);
    return User.findOne({username: username});
}

export function findUser(username){
    setUpConnection();
    console.log(username);
    return User.findOne({username: username}).select('password');

}