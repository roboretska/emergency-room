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
                gender:'',
                residencePermit:'',
                provisionalDiagnosis:'',
                hospitalizationUnit:'',
                firstAid:'',
                refusalOfHospitalization:'',
                timeOfDeath: ''
            }
    }
    setDate(){
        if (this.state.timeOfDeath==='2018-01-01T00:00'){
            console.log("true");
        } else {
            console.log("false")};
    }
    initializeDate(){

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
    handleGenderChange(event) {
        this.setState({ gender: event.target.value });
    }
    handleRefusalOfHospitalizationChange(event) {
        this.setState({ refusalOfHospitalization: event.target.value });
    }
    handleTimeOfDeathChange(event) {
        this.setState({ timeOfDeath: event.target.value });
    }
    handleFirstAidChange(event) {
        this.setState({ firstAid: event.target.value });
    }

    handlePatientAdd() {
        const newPatient = {
            name:  this.state.name,
            arrivalTime: this.state.arrivalTime,
            birthDate:  this.state.birthDate,
            gender: this.state.gender,
            residencePermit: this.state.residencePermit,
            provisionalDiagnosis: this.state.provisionalDiagnosis,
            hospitalizationUnit: this.state.hospitalizationUnit,
            firstAid: this.state.firstAid,
            refusalOfHospitalization: this.state.refusalOfHospitalization,
            timeOfDeath:  this.state.timeOfDeath,
        };
        console.log("arrivalTime : "+this.state.arrivalTime);
        console.log("dischargeDate : "+this.state.dischargeDate);
        this.props.onPatientAdd(newPatient);
        this.setState({
            name: '',
            arrivalTime:'2018-01-01T00:00',
            birthDate: '',
            gender:'',
            residencePermit:'',
            provisionalDiagnosis:'',
            hospitalizationUnit:'',
            firstAid:'',
            refusalOfHospitalization:'',
            timeOfDeath: '2018-01-01T00:00',
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
            <div className="form-container main">
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
                        <label for="gender" >Стать</label>
                        <input type="text" id="gender"
                               value={this.state.gender}
                               onChange={this.handleGenderChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="residencePermit">Прописка</label>
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
                        <label for="firstAid">Перша надана допомога</label>
                        <textarea id="firstAid"
                                  value={this.state.firstAid}
                                  onChange={this.handleFirstAidChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="refusalOfHospitalization">Відмова від госпіталізації</label>
                        <textarea id="refusalOfHospitalization"
                                  value={this.state.refusalOfHospitalization}
                                  onChange={this.handleRefusalOfHospitalizationChange.bind(this)}
                        />
                    </span>
                    <span className="field">
                        <label for="timeOfDeath">Час смерті</label>
                        <input type="datetime-local" id="timeOfDeath"
                               defaultValue={this.state.timeOfDeath}
                               onChange={this.handleTimeOfDeathChange.bind(this)}
                        />
                    </span>
                    <button
                        disabled={!this.state.name}
                        onClick={this.handlePatientAdd.bind(this)}
                        title="Введіть усі необхідні поля"
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