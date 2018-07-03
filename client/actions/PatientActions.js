import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const PatientActions = {

    loadPatients() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_PATIENTS_REQUEST
        });

        api.patientList()
            .then(({data}) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_PATIENTS_SUCCESS,
                    patients: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_PATIENTS_FAIL,
                    error: err
                })
            );
    },

    addPatient(patient) {
        api.addPatient(patient)
            .then(() =>
                this.loadPatients()
            )
            .catch(err =>
                console.error(err)
            );
    },

    getListByName(name){
        AppDispatcher.dispatch({
            type: Constants.LOAD_PATIENTS_BY_NAME_REQUEST
        });

        api.getListByName(name)
            .then(({data}) =>{
            AppDispatcher.dispatch({
                    type: Constants.LOAD_PATIENTS_BY_NAME_SUCCESS,
                    patientsByName: data
                });
       }
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_PATIENTS_BY_NAME_FAIL,
                    error: err
                })

            );
    },
    updatePatient(id, data) {
        api.updatePatient(id, data)
            .then(() =>
                this.loadPatients()
            )
            .catch(err =>{
                console.log(err);
                console.error(err)}
            );
    },
    login(user){
        AppDispatcher.dispatch({
            type: Constants.LOAD_TOKEN_REQUEST
        });
        api.login(user)
            .then(response=> {
                console.log(response.data);
                AppDispatcher.dispatch({
                    type: Constants.LOAD_TOKEN_SUCCESS,
                    token: response.data
                });
            })
            .catch(err=>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_TOKEN_FAIL,
                    error: err
                }));
    },
    logout(){
        AppDispatcher.dispatch({
            type: Constants.DELETE_TOKEN_REQUEST
        });
        AppDispatcher.dispatch({
            type: Constants.LOAD_TOKEN_SUCCESS,
            token: ''
        });
    }

};

export default PatientActions;