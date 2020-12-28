import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterFormView = ({
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
}) => {
    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
                <Form.Control 
                    type="text"
                    className="input-field first-name"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName && touched.firstName}
                />
                <ErrorMessage name="firstName" component="div" className="invalid-field-message"/>
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Control 
                    type="text" 
                    className="input-field last-name"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName && touched.lastName}
                />
                <ErrorMessage name="lastName" component="div" className="invalid-field-message"/>
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Control 
                    type="email" 
                    className="input-field email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email && touched.email}
                />
                <ErrorMessage name="email" component="div" className="invalid-field-message"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control 
                    type="password" 
                    className="input-field password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password && touched.password}
                />
                <ErrorMessage name="password" component="div" className="invalid-field-message"/>
            </Form.Group>
            <Button variant="primary" type="submit" className="register-form-btn">
                Sign Up
            </Button>
        </Form>
    )
}

export default RegisterFormView;
