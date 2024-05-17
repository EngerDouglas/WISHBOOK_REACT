import React from 'react';
import '../css/login';
import {getData, postData} from '../../functions/request';
import axios from 'axios';
import { getCookie, setCookie } from '../../functions/cookies';

export default class login extends React.Component{

    constructor(props){
        super(props);

        this.submit = this.submit.bind(true);
    }

    componentDidMount(){
        console.log("getCoockie('user_name')",getCookie('user_auth'))
    }

    submit(event){
        event.preventDefault();
    
        const url = document.getElementById('url').value; // event.target.username
        const description = document.getElementById('description').value;
    
        
        const data = {
            url:url,
            description:description
        }
    
        axios({
            method: 'post', 
            data: data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then( response => {
            console.log('response', response);
            alert(res.data.message);
            if(response.status === 200){
                window.location.href = '/';
            }
        }).catch( error => {
            console.log('error', error);
            alert(err.message);
        });
    }


    render(){ 
        return <div className= {"d-flex justify-content-center"} >
                    <div className="d-flex justify-content-center">
                        <img src={logo} alt="logo">
                    </div>
                    <div className="center">
                        <div className="main">  	
                            <input type="checkbox" id="chk" aria-hidden="true">
                            <div className="signup">
                                <form id="form-create">
                                    <label for="chk" aria-hidden="true">Sign up</label>
                                    <input type="text" id="username" name="username" placeholder="User name" required="">
                                    <input type="email" id="email" name="email" placeholder="Email" required="">
                                    <input type="password" id="password" name="password" placeholder="Password" minlength="8" required="">
                                    <button id="btn1" type="submit">Sign up</button>
                                </form>
                            </div>
                            <div className="login">
                                <form id = "form-login">
                                    <label for="chk" aria-hidden="true">Login</label>
                                    <input type="email" id="logemail" name="logemail" placeholder="Email" required="">
                                    <input type="password" id="logpassword" name="logpassword" placeholder="Password" minlength="8" required>
                                    <button id="btn"type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    }
}