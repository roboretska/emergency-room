import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name:    {type: String, required: true},
    arrivalTime: { type: Date },
    birthDate: { type: Date},
    gender :{type: String},
    residencePermit: {type: String},
    provisionalDiagnosis: {type: String},
    hospitalizationUnit: {type: String},
    firstAid: {type: String},
    refusalOfHospitalization: {type: String},
    timeOfDeath: { type: Date}
});

const Patient = mongoose.model('Patient', PatientSchema);
