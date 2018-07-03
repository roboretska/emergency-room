import React, {Component} from 'react';


class PreviousVisits extends Component{
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
    re
    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td className="date">{this.toDateTime(this.props.arrivalTime)}</td>
                <td>{this.toDate(this.props.birthDate)}</td>
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

export default PreviousVisits;