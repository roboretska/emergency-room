import  bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

import * as userdb from './utils/Aut';

import user_config from '../config/user_config';


userdb.setUpConnection();

let users =  [{username:"Олійник Віктор Павлович", password: "89Kb3RqW156"},
    {username:"Ковальчук Роман Орестович", password: "Kl357dAs567"},
    {username:"Дутчак Олена Сергіївна", password: "456YU89fJ0"},
    {username:"Пономаренко Олеся Андріївна", password: "pz342DcG678M"},
    {username:"Сірий Сергій Олександрович", password: "Hn3901SvQ890l"},
];


users.forEach(function(user){
    console.log(user);
    let password = user.password;
    bcrypt.hash(password, 10, function(err, hash){
        if (err){console.error(err)}
        else {
            console.log("Hy" + hash);
            userdb.addUser(user.username, hash)
                .catch((err)=>{console.log(err)});
        }
    })
});

return;



