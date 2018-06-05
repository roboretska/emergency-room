import React,  {Component} from 'react';
import TableHeaders from './TableHeaders.js';
import RegisteredPatient from './RegisteredPatient';
import './table.css';


class Table extends Component{

render(){
        const patientArray=this.props.patients.map(patient =>
            <RegisteredPatient key={patient.id}
                               id={patient.id}
                               name={patient.name}
                               arrivalTime={patient.arrivalTime}
                               birthDate={patient.birthDate}
                               gender={patient.gender}
                               residencePermit={patient.residencePermit}
                               provisionalDiagnosis={patient.provisionalDiagnosis}
                               hospitalizationUnit={patient.hospitalizationUnit}
                               medicalReferrals={patient.refusalOfHospitalization}
                               dischargeDate={patient.timeOfDeath}
                               firstAid={patient.firstAid}

            />
        );
        return(
            <table>
                <thead>
                <TableHeaders/>
                </thead>
                <tbody>
                {patientArray}
                </tbody>

            </table>
        )
    }

}

export default Table;