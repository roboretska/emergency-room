import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name:    {type: String, required: true},
    arrivalTime: { type: Date },
    birthDate: { type: Date},
    residencePermit: {type: String},
    provisionalDiagnosis: {type: String},
    hospitalizationUnit: {type: String},
    finalDiagnosis: {type: String},
    medicalReferrals: {type: String},
    dischargeDate: { type: Date},
    firstAid: {type: String}
});

const Patient = mongoose.model('Patient', PatientSchema);
