import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import { serverPort } from '../config/config.json';

import * as db from './utils/DataBaseUtils';

db.setUpConnection();



const app = express();



app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use( cors({origin: '*'}) );




app.get('/patients', (req, res) => {
    db.patientList().then(data => res.send(data)).catch(err => console.log(err));
});

app.post('/patients', (req, res) => {
    db.addPatient(req.body).then(data => res.send(data));
});



app.get('/patients/:name', (req, res) => {
    db.getListByName(req.params.name).then(data => res.send(data));
});

app.get('/:id', (req, res) => {
    db.getById(req.params.id).then(data => res.send(data));
});

app.put('/:id', (req, res) => {
    db.updatePatient(req.params.id, req.body).then(data => res.send(data));
});


app.get('/search/:value', (req, res) => {
    console.log(req.params.value);
    db.dbQuickSearch(req.params.value).then(data => res.send(data)).catch(err => console.log(err));
});





const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});