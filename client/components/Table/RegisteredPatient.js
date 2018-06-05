import React, {Component} from 'react';


class RegisteredPatient extends Component{




    render(){
    return(
        <tr patientName={this.props.name}>
            <td>№</td>
            <td>{this.props.name}</td>
            <td>{this.props.arrivalTime}</td>
            <td>{this.props.birthDate}</td>
            <td>{this.props.residencePermit}</td>
            <td>{this.props.provisionalDiagnosis}</td>
            <td>{this.props.hospitalizationUnit}</td>
            <td>{this.props.medicalReferrals}</td>
            <td>{this.props.finalDiagnosis}</td>
            <td>{this.props.dischargeDate}</td>
            <td>{this.props.firstAid}</td>
        </tr>
    )
    }
}

export default RegisteredPatient;