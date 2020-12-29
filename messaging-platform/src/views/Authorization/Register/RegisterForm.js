import React from 'react';
import { Formik } from 'formik';


import RegisterFormView from './RegisterFormView';
import requester from '../../../services/requester';
import api from '../../../services/api';
import { validateRequestField, validateEmail, validateLength } from '../../../services/validators';

import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = ({
    isLogin,
}) => {
    const registerUser = data => requester(api.addUser()).create(data);
    const validationFields = isLogin ? ['email', 'password'] : ['firstName', 'lastName', 'email', 'password'];
    const initialValues = isLogin 
        ? { email: '', password: '' } 
        : { firstName: '', lastName: '', email: '', password: '' };

    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                return {
                    ...validateEmail(values, ['email']),
                    ...validateLength(values, [
                        {value: "password", minLength: 8, maxLength: 32}
                    ]),
                    ...validateRequestField(values, validationFields),
                }
            }}
            onSubmit={values => {
                registerUser(values);
                console.log(true)
            }}
        > 
            {(props) => 
                <RegisterFormView
                    isLogin={isLogin}
                    {...props} 
                />
            }
        </Formik>
    )
}

export default RegisterForm;
