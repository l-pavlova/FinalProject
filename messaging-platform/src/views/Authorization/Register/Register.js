import React from 'react';
import { Card } from 'react-bootstrap';

import RegisterForm from './RegisterForm';

import './Register.scss'

const Register = () => {
    return (
        <div className="register-wrapper">
            <div className="register-form-wrapper">
                <RegisterForm/>
            </div>
        </div>

    )
} 

export default Register;