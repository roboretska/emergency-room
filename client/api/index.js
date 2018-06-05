import axios from 'axios';

import { apiPrefix } from '../../config/config.json';

export default {
    patientList(){
        return axios.get(`${apiPrefix}/patients`);
    },

    addPatient(data){
        return axios.post(`${apiPrefix}/patients`, data);
    },

    getListByName(name){
        return axios.get(`${apiPrefix}/patients/${name}`);
    }
}