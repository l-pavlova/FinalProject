import React from 'react';
import { Formik } from 'formik';


import RegisterFormView from './RegisterFormView';
import requester from '../../../services/requester';
import api from '../../../services/api';
import { validateRequestField, validateEmail, validateLength } from '../../../services/validators';

import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
    const registerUser = data => requester(api.addUser()).create(data);

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }}
            validate={values => {
                return {
                    ...validateEmail(values, ['email']),
                    ...validateLength(values, [
                        {value: "password", minLength: 8, maxLength: 32}
                    ]),
                    ...validateRequestField(values, ['firstName', 'lastName', 'email', 'password']),
                }
            }}
            onSubmit={values => {
                registerUser(values);
            }}
        > 
            {(props) => 
                <RegisterFormView
                    {...props} 
                />
            }
        </Formik>
    )
}

export default RegisterForm;
