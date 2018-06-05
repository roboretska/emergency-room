import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _patients = [];
let _loadingError = null;
let _isLoading = true;

function formatPatient(patient) {
    return {
        id: patient._id,
        name: patient.name,
        arrivalTime: patient.arrivalTime,
        birthDate: patient.birthDate,
        residencePermit:patient.residencePermit,
        provisionalDiagnosis:patient.provisionalDiagnosis,
        hospitalizationUnit:patient.hospitalizationUnit,
        medicalReferrals:patient.medicalReferrals,
        finalDiagnosis:patient.finalDiagnosis,
        dischargeDate:patient.dischargeDate,
        firstAid: patient.firstAid

    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getPatients() {
        return _patients;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_PATIENTS_REQUEST: {
        _isLoading = true;

        TasksStore.emitChange();
        break;
    }

        case AppConstants.LOAD_PATIENTS_SUCCESS: {
            _isLoading = false;
            _patients = action.patients.map( formatPatient);
            _loadingError = null;
            TasksStore.emitChange();

            break;
        }

        case AppConstants.LOAD_PATIENTS_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

    }
});

export default TasksStore;
