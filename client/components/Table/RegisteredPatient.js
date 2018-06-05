import React, {Component} from 'react';


class RegisteredPatient extends Component{




    render(){
        console.log(this.props.id);
        return(
        <tr patientName={this.props.name} uniqueId={this.props.id}>
            <td>{this.props.name}</td>
            <td>{this.props.arrivalTime}</td>
            <td>{this.props.birthDate}</td>
            <td>{this.props.gender}</td>
            <td>{this.props.residencePermit}</td>
            <td>{this.props.provisionalDiagnosis}</td>
            <td>{this.props.hospitalizationUnit}</td>
            <td>{this.props.firstAid}</td>
            <td>{this.props.refusalOfHospitalization}</td>
            <td>{this.props.timeOfDeath}</td>
        </tr>
    )
    }
}


export default RegisteredPatient;