import React, { useState } from 'react';

import { login, signup } from '../../../utils/authFunctions' 
import authService from '../../../services/authService' 
import RegisterForm from './RegisterForm';

import './Register.scss'

const Register = (
) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleRegister = async (userData) => {
        await signup(userData.email, userData.password);
        await authService.register(userData);
        setIsLogin(true);
    };

    const handleLogin = async (userData) => {
        await login(userData.email, userData.password);
    }

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
                    handleRegister={handleRegister}
                    handleLogin={handleLogin}
                />
            </div>
        </div>
    )
} 

export default Register;