import mongoose from "mongoose";

import '../models/Patient';

import config from '../../config/config.json';


const Patient = mongoose.model('Patient');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function patientList() {
    return Patient.find().sort({ arrivalTime: -1 });
}


export function getListByName(name) {
    return Patient.find({name: name});
}
export function getById(id) {
    return Patient.findById(id);
}

export function updatePatient(id, data) {
    return Patient.findById(id).set({
            name:   data.name,
            arrivalTime: data.arrivalTime,
            birthDate:  data.birthDate,
            gender : data.gender,
            residencePermit:  data.residencePermit,
            provisionalDiagnosis:  data.provisionalDiagnosis,
            hospitalizationUnit:  data.hospitalizationUnit,
            firstAid:  data.firstAid,
            refusalOfHospitalization: data.refusalOfHospitalization,
            timeOfDeath:  data.timeOfDeath
        }

    );
}

export function addPatient(data) {
    const note = new Patient({
        name:   data.name,
        arrivalTime: data.arrivalTime,
        birthDate:  data.birthDate,
        gender : data.gender,
        residencePermit:  data.residencePermit,
        provisionalDiagnosis:  data.provisionalDiagnosis,
        hospitalizationUnit:  data.hospitalizationUnit,
        firstAid:  data.firstAid,
        refusalOfHospitalization: data.refusalOfHospitalization,
        timeOfDeath:  data.timeOfDeath
    });

    return note.save();
}
