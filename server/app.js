import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { serverPort } from '../config/config.json';

import * as db from './utils/DataBaseUtils';





const app = express();

db.setUpConnection();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use( cors({origin: '*'}) );


app.get('/patients', (req, res) => {
    db.patientList().then(data => res.send(data));
});

app.post('/patients', (req, res) => {
    db.addPatient(req.body).then(data => res.send(data));
});

app.get('/patients/:name', (req, res) => {
    db.getListByName(req.params.name).then(data => res.send(data));
});

app.put('/patients/:id', (req, res) => {
    db.updatePatient(req.params.id, req.body).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});