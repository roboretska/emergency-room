import React , {Component} from 'react';
import './auth.css';

import PatientActions from '../actions/PatientActions.js';

import TokenStore from '../stores/TokenStore';



class Auth  extends Component {
    constructor(props){
        super(props);
        this.state={
            loginFailure: false,
            username:'Дутчак Олена Сергіївна',
            password:'456YU89fJ0',
        };
    }
    componentDidMount() {
        TokenStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        TokenStore.removeChangeListener(this._onChange.bind(this));
    }

    handleUsernameChange(event){
        this.setState({ username: event.target.value });
    }
    handlePasswordChange(event){
        this.setState({ password: event.target.value });
    }
    login(){
        const userData={
            username: this.state.username,
            password: this.state.password
        };
        PatientActions.login(userData);


    }

    render(){
        const  warningMessage = this.state.loginFailure &&<div className="warning">
            <p>Введено невірні дані. Спробуйте ще раз.</p>
        </div>
        return(
            <div className="auth-form">
                <h3>Вхід в систему</h3>
                <div className="user-container">
                    <div><label for="username">ПІП</label></div>
                    <div><input type="text" id="username"
                       value={this.state.username}
                       onChange={this.handleUsernameChange.bind(this)}
                    /></div>
                </div>
                <div className="user-container">
                    <div><label for="password">Пароль</label></div>
                        <div><input type="password" id="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange.bind(this)}
                    />
                        </div>
                </div>
                {warningMessage}
                <button onClick={this.login.bind(this)}>Увійти в систему</button>
            </div>

        )
    }

    _onChange(){
        let loginError=TokenStore.getError();
        if(loginError!==null){
            this.setState({loginFailure: true})
        } else this.setState({loginFailure: false});
        console.log(this.state);

    }

}

export default Auth;