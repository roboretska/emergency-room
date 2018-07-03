import fs from "fs";
import * as db from './server/utils/Aut';

let user;
db.findUser("Ковальчук Роман Орестович").then(data=>user=data);
let obj2={
    _id : ObjectId("5b23ef5cf8df6b18682368be"),
    name : "Хомик Юлія Степанівна",
    arrivalTime : ISODate("2018-05-05T07:01:00.000Z"),
    birthDate : ISODate("1965-05-13T00:00:00.000Z"),
    gender : "Жіноча",
    residencePermit : "улица Академика Андрея Сахарова, 10, 5, Львов, Львовская область, Украина",
    provisionalDiagnosis : "Update test",
    hospitalizationUnit : "Хірургічне",
    firstAid : "Update test",
    refusalOfHospitalization : "",
    timeOfDeath : null,
};
let obj1={
    _id : ObjectId("5b23ef5cf8df6b18682368be"),
    name : "Хомик Юлія Степанівна",
    arrivalTime : ISODate("2018-05-05T10:04:00.000Z"),
    birthDate : ISODate("1965-05-13T00:00:00.000Z"),
    gender : "Жіноча",
    residencePermit : "улица Академика Андрея Сахарова, 10, 5, Львов, Львовская область, Украина",
    provisionalDiagnosis : "тест",
    hospitalizationUnit : "Хірургічне",
    firstAid : "тест",
    refusalOfHospitalization : "",
    timeOfDeath : null,

logger(user, obj1, obj2);

function logger(user, obj1,obj2){
    let filename=`./log/logfile${new Date().toISOString()}.txt`;
    let newObj = { };
    newObj.username=user.username;
    newObj.unit=user.unit;
    newObj.occupation=user.occupation;
    if(obj1.name!==obj2.name){}
    fs.writeFile(filename, util.inspect(obj) , 'utf-8');
}