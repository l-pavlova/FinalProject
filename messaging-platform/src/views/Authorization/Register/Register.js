import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import RegisterForm from './RegisterForm';

import './Register.scss'

const Register = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="register-wrapper">
            <div className="header-wrapper">
                <h1 className="register-title"> { isLogin ? "Log In to LBM" : "Sign Up to LBM" }</h1>
                <div className="register-subtitle-wrapper">
                    <h5 className="register-subtitle"> { isLogin ? "Don't have an account?" : "Already have an account?"}</h5>
                    <button className="register-login-link-btn" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Log In"}</button>
                </div>
            </div>
            <div className="register-form-wrapper">
                <RegisterForm
                    isLogin={isLogin}
                />
            </div>
        </div>
    )
} 

export default Register;