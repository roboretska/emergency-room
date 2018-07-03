import  {Router} from 'express';
import  bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

import * as userdb from './utils/Aut';

import user_config from '../config/user_config';


userdb.setUpConnection();



Router.get('/user', function (req, res, ) {
    let auth;
    if(!req.headers['x-auth']) {
        return res.sendStatus(401);
    }
    try {
         auth = jwt.decode(req.headers['x-auth'], user_config.secretkey);
    } catch (err) {
        return res.sendStatus(401)
    }
    userdb.checkUser(auth.name);
});
