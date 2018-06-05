import React , {Component} from 'react';
import { hot } from 'react-hot-loader'

import Table from './Table/Table.js';
import AddNewPatient from './AddNewPatient/AddNewPatient.js';
import PreviousList from './PreviousList/PreviousList.js';

import PatientStore from '../stores/PatientsStore.js';
import PatientsByNameStore from '../stores/PatientsByNameStore.js';

import PatientActions from '../actions/PatientActions.js';

import './app.css';

let previousClickedElement;

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
        PatientActions.addPatient(data);
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

    updatePatient(event){
        event.preventDefault();
        console.log(event.target.parentElement);
    };

    render() {
        const ShowForm = this.state.openForm && <AddNewPatient onPatientAdd={this.handlePatientAdd.bind(this)}/>;

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
                    <button onClick={this.openForm.bind(this)}>Додати пацієнта</button>
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
