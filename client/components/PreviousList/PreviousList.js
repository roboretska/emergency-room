import React,  {Component} from 'react';
import PreviousVisits from './PreviousVisits.js';
import TableHeaders from'../Table/TableHeaders'
import './PreviousList.css'


class PreviousList extends Component{

    render(){
        return(
            <table >
                <TableHeaders/>
                <tbody>
                {
                    this.props.patients.map(patient =>
                        <PreviousVisits name={patient.name}
                                           arrivalTime={patient.arrivalTime}
                                           birthDate={patient.birthDate}
                                           residencePermit={patient.residencePermit}
                                           provisionalDiagnosis={patient.provisionalDiagnosis}
                                           hospitalizationUnit={patient.hospitalizationUnit}
                                           medicalReferrals={patient.medicalReferrals}
                                           finalDiagnosis={patient.finalDiagnosis}
                                           dischargeDate={patient.dischargeDate}
                                           firstAid={patient.firstAid}
                        />
                    )
                }
                </tbody>

            </table>
        )
    }

}

export default PreviousList;