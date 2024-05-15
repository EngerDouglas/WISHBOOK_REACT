import { useState,useEffect } from "react";
import {link} from 'react-router-dom';
import logo from '../img/El texto del párrafo.png'
import '../css/login';

export default function login(props){
    const [userAuth, setUserAuth] = useState({state: false});
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
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
    )
}