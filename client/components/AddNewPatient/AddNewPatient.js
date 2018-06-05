import React,  {Component} from 'react';
import ReactDOM from 'react-dom';

import './form.css';
/* global google */

class AddNewPatient extends Component{

    constructor(props){
        super(props);

            this.state= {
                name: '',
                arrivalTime:'2018-01-01T00:00',
                birthDate: '',
                residencePermit:'',
                provisionalDiagnosis:'',
                hospitalizationUnit:'',
                medicalReferrals:'',
                finalDiagnosis:'',
                dischargeDate:'2018-01-01T00:00',
                firstAid:'',
            }
    }

    componentDidMount() {
       window.addressAutocomplete = this.addressAutocomplete.bind(this);
       loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCYYCAoADxUGaTHqd5K6pEjay8hD-M4shg&libraries=places&callback=addressAutocomplete');
   }


    addressAutocomplete(){
        const input = ReactDOM.findDOMNode(this.refs.residencePermit);
        const autocomplete = new google.maps.places.Autocomplete(input);
    }



    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleArrivalTimeChange(event) {
        this.setState({ arrivalTime: event.target.value });
    }
    handleBirthDateChange(event) {
        this.setState({ birthDate: event.target.value });
    }
    handleResidencePermitChange(event) {
        this.setState({ residencePermit: event.target.value });
    }
    handleProvisionalDiagnosisChange(event) {
        this.setState({ provisionalDiagnosis: event.target.value });
    }
    handleHospitalizationUnitChange(event) {
        this.setState({ hospitalizationUnit: event.target.value });
    }
    handleMedicalReferralsChange(event) {
        this.setState({ medicalReferrals: event.target.value });
    }
    handleFinalDiagnosisChange(event) {
        this.setState({ finalDiagnosis: event.target.value });
    }
    handleDischargeDateChange(event) {
        this.setState({ dischargeDate: event.target.value });
    }
    handleFirstAidChange(event) {
        this.setState({ firstAid: event.target.value });
    }

    handlePatientAdd() {
        const newPatient = {
            name: this.state.name,
            arrivalTime: this.state.arrivalTime,
            birthDate: this.state.birthDate,
            residencePermit:this.state.residencePermit,
            provisionalDiagnosis:this.state.provisionalDiagnosis,
            hospitalizationUnit:this.state.hospitalizationUnit,
            medicalReferrals:this.state.medicalReferrals,
            finalDiagnosis:this.state.finalDiagnosis,
            dischargeDate:this.state.dischargeDate,
            firstAid:this.state.firstAid,
        };
        console.log("arrivalTime : "+this.state.arrivalTime);
        console.log("dischargeDate : "+this.state.dischargeDate);
        this.props.onPatientAdd(newPatient);
        this.setState({
            name: '',
            arrivalTime:'2018-01-01T00:00',
            birthDate: '',
            residencePermit:'',
            provisionalDiagnosis:'',
            hospitalizationUnit:'',
            medicalReferrals:'',
            finalDiagnosis:'',
            dischargeDate:'2018-01-01T00:00',
            firstAid:'',
        });
    }

    currentDay(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }
        return yyyy+'-'+mm+'-'+dd;
    }

    currentDateTime(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }
        return yyyy+'-'+mm+'-'+dd+'T00:00';
    }

    render(){
        return(
            <div className="form-container">
                <form>
                    <span className="field">
                        <label for="name">ПІП</label>
                        <input type="text" id="name"
                               value={this.state.name}
                               onChange={this.handleNameChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="arrivalTime">Дата пибуття</label>
                        <input type="datetime-local" id="arrivalTime"
                               defaultValue={this.state.arrivalTime}
                               onChange={this.handleArrivalTimeChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="birthdate">Дата народження</label>
                        <input type="date" id="birthdate"
                               value={this.state.birthDate}
                               min="1990-01-01"
                               max={this.currentDay()}
                               onChange={this.handleBirthDateChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="residencePermit" >Прописка</label>
                        <input type="text" id="residencePermit"
                               ref="residencePermit"
                               value={this.state.residencePermit}
                               onChange={this.handleResidencePermitChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                         <label for="provisionalDiagnosis">Попереденій діагноз</label>
                         <textarea id="provisionalDiagnosis"
                                   value={this.state.provisionalDiagnosis}
                                   onChange={this.handleProvisionalDiagnosisChange.bind(this)}
                         />
                    </span>
                    <span className="field">
                        <label for="hospitalizationUnit">Відділеня госпіталізації</label>
                        <input type="text" id="hospitalizationUnit"
                               value={this.state.hospitalizationUnit}
                               onChange={this.handleHospitalizationUnitChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="medicalReferrals">Направлення</label>
                        <input type="text" id="medicalReferrals"
                               value={this.state.medicalReferrals}
                               onChange={this.handleMedicalReferralsChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="finalDiagnosis">Кінцевий діагноз</label>
                        <textarea id="finalDiagnosis"
                                  value={this.state.finalDiagnosis}
                                  onChange={this.handleFinalDiagnosisChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="dischargeDate">Дата виписки</label>
                        <input type="datetime-local" id="dischargeDate"
                               defaultValue={this.state.dischargeDate}
                               onChange={this.handleDischargeDateChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="firstAid">Перша надана допомога</label>
                        <textarea id="firstAid"
                                  value={this.state.firstAid}
                                  onChange={this.handleFirstAidChange.bind(this)}
                        />
                    </span>
                    <button
                        disabled={!this.state.name}
                        onClick={this.handlePatientAdd.bind(this)}
                    >
                        Add
                    </button>
                </form>
            </div>
        )
    }


}


 function loadJS(src) {
     var ref = window.document.getElementsByTagName("script")[0];
     var script = window.document.createElement("script");
     script.src = src;
     script.async = true;
     ref.parentNode.insertBefore(script, ref);
 }
export default AddNewPatient;