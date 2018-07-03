import React , {Component} from 'react';

import Table from './Table/Table.js';
import AddNewPatient from './Form/AddNewPatient.js';
import PreviousList from './PreviousList/PreviousList.js';

import PatientStore from '../stores/PatientsStore.js';
import PatientsByNameStore from '../stores/PatientsByNameStore.js';

import api from '../api';


import PatientActions from '../actions/PatientActions.js';

import './app.css';
import './tooltip.css';

let previousClickedElement;
let info=null;
let search=null;
let patientsSearch=null;

function getStateFromFlux() {
    return{
        isLoading: PatientStore.isLoading(),
        patients: PatientStore.getPatients(),
        patientsByName:PatientsByNameStore.getPatients(),
        openForm: false,

    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = getStateFromFlux()
    }

    componentWillMount() {
        PatientActions.loadPatients();
    }

    componentDidMount() {
        PatientStore.addChangeListener(this._onChange.bind(this));
        PatientsByNameStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        PatientStore.removeChangeListener(this._onChange.bind(this));
    }

    handlePatientAdd(data) {
        console.log(info);
        console.log(data);
        if(info==false){
            console.log(info);
            console.log("New user");
            PatientActions.addPatient(data);
        }else{
            console.log("Update");
            console.log(info);
            PatientActions.updatePatient(info._id, data);
        }
        info=null;
    }

    openForm() {
        this.setState({openForm: !this.state.openForm});
        if(this.state.openForm==false){info='';}
    }

    onClickEvent(event){
        let i = event.target.parentElement;
        if(i){
            if(previousClickedElement)previousClickedElement.className = '';
            PatientActions.getListByName(i.getAttribute('patientname'));
            i.className="active";
            previousClickedElement = i;
        }

    }

    search(event){
        search=event.target.value;
        api.searchPatient(search).then(data => {this.getSearchResult(data);});
        if(!search){
            patientsSearch=null;
        }

    }

    getSearchResult(data){
        patientsSearch = data.data;
        console.log(patientsSearch);
        if(patientsSearch.length){
            this.setState({patients: patientsSearch});
        }
    }

    getInfo(data){
        info = data;
        this.openForm();
    }

    updatePatient(event){
        let i = event.target.parentElement;
        event.preventDefault();
        api.getPatientById(i.getAttribute('uniqueid')).then(({data}) =>{this.getInfo(data)});


    };


    changeButtonName(){
        if(this.state.openForm===true){
            return "Повернутися до списку";
        }
        else{
            return "Додати новий запис";
        }
    }


    render() {
        const ShowForm = this.state.openForm && <AddNewPatient onPatientAdd={this.handlePatientAdd.bind(this)} patientInfo={info}/>;
        const ShowTable =
            <div className="main-table-container" onClick={this.onClickEvent.bind(this)} onContextMenu={this.updatePatient.bind(this)}>
            <Table patients={this.state.patients}  />
        </div>;

        const ShowPreviousTable =
            <div className="secondary-table-container">
            <PreviousList patients={this.state.patientsByName} />
        </div>;
        const OpenedTables = !this.state.openForm && <div className="container">
            {ShowTable}
            {ShowPreviousTable}
        </div>;

        return (
            <div>
                <div className="nav-container">
                    <button onClick={this.openForm.bind(this)}>{this.changeButtonName()}</button>
                    <input className="search-field" type="text"
                           value={this.state.searchField} onChange={this.search.bind(this)}/>
                    <button><i className="icon-search"/></button>
                    <button >Вихід</button>
                    <div className="tooltip"><i className="icon-help helper"/>
                        <span className="tooltiptext">Tooltip text</span>
                    </div>
                </div>
                    {ShowForm}
                    {OpenedTables}
            </div>)

    }


    _onChange(){
        this.setState(getStateFromFlux());
    }
}

export default App;
