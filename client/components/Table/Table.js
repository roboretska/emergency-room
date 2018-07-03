import React,  {Component} from 'react';
import TableHeaders from './TableHeaders.js';
import RegisteredPatient from './RegisteredPatient';
import './table.css';


class Table extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isFail: false
        }
    }






render(){
    const err=this.state.isFail &&
        <tr><td colSpan="10"     className="warning">
            Таких пацієнтів не знайдено. Спробуйте ще раз.</td></tr>;
    const patientArray= this.props.patients.map(patient =>
            <RegisteredPatient key={patient.id}
                               id={patient.id}
                               name={patient.name}
                               arrivalTime={patient.arrivalTime}
                               birthDate={patient.birthDate}
                               gender={patient.gender}
                               residencePermit={patient.residencePermit}
                               provisionalDiagnosis={patient.provisionalDiagnosis}
                               hospitalizationUnit={patient.hospitalizationUnit}
                               refusalOfHospitalization={patient.refusalOfHospitalization}
                               timeOfDeath={patient.timeOfDeath}
                               firstAid={patient.firstAid}

            />
        );
        return(
            <table>
                <thead>
                <TableHeaders/>
                </thead>
                <tbody>
                {err}
                {patientArray}
                </tbody>

            </table>
        )
    }

}

export default Table;