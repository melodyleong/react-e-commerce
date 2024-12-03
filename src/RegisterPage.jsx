import React, {useState } from 'react';

import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';


function RegisterPage() {

    const { showMessage } = useFlashMessage();

    const validationSchema = Yup.object({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().email('Invalid email address').required("You must provide your email address"),
        password: Yup.string().required("Please provide a password").min(4, "Password must be 8 characters long minimally"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Please type in your password again"),
        salutation: Yup.string().required("Salutation is required"),
        city: Yup.string().required("City is required"),
        //marketingPreferences: Yup.mixed().oneOf(["email", "sms", null]),
        });

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        salutation: "",
        marketingPreferences: [],
        city: "",
    }

    const [, setLocation] = useLocation();
    const [showSuccess, setShowSuccess] = useState(false);
    
    const handleSubmit = async (values, formikHelpers) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, values);          console.log('Registration successful:', response.data);
          showMessage('Registration successful!', 'success');
        } catch (error) {
          console.error('Registration failed:', error.response?.data || error.message);
          showMessage('Registration failed. Please try again.', 'error');
        } finally {
          formikHelpers.setSubmitting(false);
          setLocation('/');
        }
      };

    return (
        <div className="container mt-5">
            <h1>Register</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                {
                    (formik) => (
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <Field type="text" className="form-control" id="name" name="name"/>
                                {formik.errors.name && formik.touched.name && <div className="text-danger">{formik.errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <Field type="email" className="form-control" id="email" name="email"/>
                                {formik.errors.email && formik.touched.email && <div className="text-danger">{formik.errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field type="password" className="form-control" id="password" name="password"/>
                                {formik.errors.password && formik.touched.password && <div className="text-danger">{formik.errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <Field type="password" className="form-control" id="confirmPassword" name="confirmPassword"/>
                                {formik.errors.confirmPassword && formik.touched.confirmPassword && <div className="text-danger">{formik.errors.confirmPassword}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Salutation</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="salutation" id="mr" value="Mr" />
                                        <label className="form-check-label" htmlFor="mr">Mr</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="salutation" id="ms" value="Ms" />
                                        <label className="form-check-label" htmlFor="ms">Ms</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field className="form-check-input" type="radio" name="salutation" id="mrs" value="Mrs" />
                                        <label className="form-check-label" htmlFor="mrs">Mrs</label>
                                    </div>
                                </div>
                                {formik.errors.salutation && formik.touched.salutation && <div className="text-danger">{formik.errors.salutation}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Marketing Preferences</label>
                                <div className="form-check">
                                    <Field className="form-check-input" type="checkbox" value="email" name="marketingPreferences" />
                                    <label className="form-check-label" htmlFor="emailMarketing">Email Marketing</label>
                                </div>
                                <div className="form-check">
                                    <Field className="form-check-input" type="checkbox" value="sms" name="marketingPreferences"/>
                                    <label className="form-check-label" htmlFor="smsMarketing">SMS Marketing</label>
                                </div>
                                {formik.errors.marketingPreferences && formik.touched.marketingPreferences && <div className="text-danger">{formik.errors.marketingPreferences}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">City</label>
                                <Field as="select" className="form-select" id="city" name="city">
                                    <option value="">Select City</option>
                                    <option value="ch">Chennai</option>
                                    <option value="cm">Coimbatore</option>
                                    <option value="tr">Trichy</option>
                                    <option value="tj">Thanjavur</option>
                                    <option value="km">Kumbakonam</option>
                                    <option value="md">Madurai</option>
                                    <option value="tv">Thiruvarur</option>
                                    <option value="sl">Salem</option>
                                    <option value="ed">Erode</option>
                                    <option value="tl">Thirunelveli</option>
                                    <option value="ve">Vellore</option>
                                </Field>
                                {formik.errors.city && formik.touched.city && <div className="text-danger">{formik.errors.city}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Register</button>
                        </Form>
                    )
                }



            </Formik>

        </div>
    );
}

export default RegisterPage;