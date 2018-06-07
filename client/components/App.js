import React , {Component} from 'react';
import { hot } from 'react-hot-loader'

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

function getStateFromFlux() {
    return{
        isLoading: PatientStore.isLoading(),
        patients: PatientStore.getPatients(),
        patientsByName:PatientsByNameStore.getPatients(),
        openForm: false
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
        if(info===null){
            PatientActions.addPatient(data);
        }else{
            PatientActions.updatePatient(data.id, data);
        }
        info=null;
    }

    openForm() {
        this.setState({openForm: !this.state.openForm})
    }

    onClickEvent(event){
        let i = event.target.parentElement;
        if(i){
            if(previousClickedElement)previousClickedElement.className = '';
            PatientActions.getListByName(i.getAttribute('patientName'));
            i.className="active";
            previousClickedElement = i;
        }

    }

    getInfo(data){
        info = data;
    }

    updatePatient(event){
        let i = event.target.parentElement;
        event.preventDefault();
        api.getPatientById(i.getAttribute('uniqueId')).then(({data}) =>{this.getInfo(data)});
        this.state.openForm = !this.state.openForm;
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
                    <input className="search-field" type="text"/>
                    <button><i className="icon-search"/></button>
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

export default hot(module)(App);
