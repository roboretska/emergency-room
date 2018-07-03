import React, {Component} from 'react';


class RegisteredPatient extends Component{

constructor(props) {
    super(props);
    this.state = {
        isFail: false
    }
}

errorMessage() {
    if(this.props.name.length=0) {
        this.setState({isFail:true})
    } else{        this.setState({isFail:false})
    }
}
    toDate(date){
        if(date) {
            return date.substring(0, 10);
        } else return '2018-01-01T00:00';

    }
    toDateTime(datetime){
        if(datetime) {
            console.log(datetime.substring(0, 10));
            return datetime.substring(0, 16);
        }
        else return '';
    }
    render(){
    const err=this.state.loginFailure &&<div className="warning">
        <p>Введено невірні дані. Спробуйте ще раз.</p>
    </div>;
        return(
        <tr patientname={this.props.name} uniqueid={this.props.id}>
            <td>{this.props.name}</td>
            <td className="date">{this.toDateTime(this.props.arrivalTime)}</td>
            <td>{this.toDate(this.props.birthDate)}</td>
            <td>{this.props.gender}</td>
            <td>{this.props.residencePermit}</td>
            <td>{this.props.provisionalDiagnosis}</td>
            <td>{this.props.hospitalizationUnit}</td>
            <td>{this.props.firstAid}</td>
            <td>{this.props.refusalOfHospitalization}</td>
            <td>{this.toDateTime(this.props.timeOfDeath)}</td>
        </tr>
    )
    }
}


export default RegisteredPatient;