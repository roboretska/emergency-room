import  bcrypt from 'bcrypt';

let password =  "Kl357dAs567";
let h;
bcrypt.hash(password, 10, function(err, hash){
    if (err){console.error(err)}
    else {
        h=hash;
        console.log("AAAA:     " + hash);

    }
});
bcrypt.compare('password', h, function(err, result) {
    if (err) { throw (err); }
    console.log(result);
});

