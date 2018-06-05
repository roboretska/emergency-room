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

export function addPatient(data) {
    const note = new Patient({
        index: data.index,
        name:   data.name,
        arrivalTime:  data.arrivalTime,
        birthDate: data.birthDate,
        residencePermit: data.residencePermit,
        provisionalDiagnosis: data.provisionalDiagnosis,
        hospitalizationUnit: data.hospitalizationUnit,
        finalDiagnosis: data.finalDiagnosis,
        medicalReferrals: data.medicalReferrals,
        dischargeDate: data.dischargeDate,
        firstAid: data.firstAid
    });

    return note.save();
}
