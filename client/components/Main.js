import React , {Component} from 'react';
import { hot } from 'react-hot-loader';

import App from './App';
import Auth from './Auth';

import TokenStore from '../stores/TokenStore';


class Main  extends Component {

    constructor(props){
        super(props);
        this.state = this.defaultState();
    }

    componentDidMount() {
        TokenStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        TokenStore.removeChangeListener(this._onChange.bind(this));
    }

    defaultState(){
        return {isAuth: false};
    }



    render(){
        const auth = !this.state.isAuth &&<Auth/>;
        const app = this.state.isAuth &&<App/>;
        return(
        <div >
            {auth}
            {app}
        </div>

        )
    }

    _onChange(){
        let token=TokenStore.getToken();
        if(token===''){this.setState({isAuth: false})}
        if(token===''){this.setState({isAuth: false})}
        else {this.setState({isAuth: true})}
        console.log(this.state.isAuth);
    }
}


export default hot(module)(Main);
