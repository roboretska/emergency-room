import axios from 'axios';

import { apiPrefix } from '../../config/config.json';



export default {
    patientList(){
        return axios.get(`${apiPrefix}/patients`);
    },

    addPatient(data){
        return axios.post(`${apiPrefix}/patients`, data);
    },
    updatePatient(id, data){
        return axios.put(`${apiPrefix}/${id}`, data);
    },
    getPatientById(id){
        return axios.get(`${apiPrefix}/${id}`);
    },

    getListByName(name){
        return axios.get(`${apiPrefix}/patients/${name}`);
    },

    searchPatient(value){
        return axios.get(`${apiPrefix}/search/${value}`);
    }

}