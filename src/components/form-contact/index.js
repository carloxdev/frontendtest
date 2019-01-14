import React from 'react';
import { withFormik, Field, ErrorMessage } from 'formik';
import './styles.css'

function FormContact(props) {

    const {
        handleSubmit,
        isSubmitting,
        errors,
    } = props

    return (
        <form className="form-contact" onSubmit={handleSubmit}>
            <div className="form-contact-field">
                <label>Nombre</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name">
                    {message => <div className="form-contact-field--error">
                        {message}
                    </div>}
                </ErrorMessage>
            </div>
            <div className="form-contact-field">
                <label>Empresa</label>
                <Field type="text" name="company"/>
                <ErrorMessage name="company">
                    {message => <div className="form-contact-field--error">
                        {message}
                    </div>}
                </ErrorMessage>
            </div>
            <div className="form-contact-field">
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email">
                    {message => <div className="form-contact-field--error">
                        {message}
                    </div>}
                </ErrorMessage>
            </div>
            <div className="form-contact-field">
                <label>Telefono</label>
                <Field type="text" name="phone"/>
                <ErrorMessage name="phone">
                    {message => <div className="form-contact-field--error">
                        {message}
                    </div>}
                </ErrorMessage>
            </div>
            <div className="form-contact-field">
                <label>¿En que podemos ayudarte?</label>
                <Field component="textarea" name="comments" id="" cols="30" rows="10"></Field>
                <ErrorMessage name="comments">
                    {message => <div className="form-contact-field--error">
                        {message}
                    </div>}
                </ErrorMessage>
            </div>
            <div className="form-contact-button">
                <button type="submit" disabled={isSubmitting}>
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default withFormik({

    mapPropsToValues(props) {
        return {
            name: '',
            company: '',
            email: '',
            phone: '',
            comments: ''
        }
    },

    validate (values) {
        const errors = {};

        if (!values.name) {
            errors.nombre = "Este campo es requerido";
        }
        if (!values.company) {
            errors.nombre = "Este campo es requerido";
        }
        if (!values.email) {
            errors.nombre = "Este campo es requerido";
        }
        if (!values.phone) {
            errors.nombre = "Este campo es requerido";
        }
        if (!values.comments) {
            errors.nombre = "Este campo es requerido";
        }

        return errors;
    },

    handleSubmit(values, formikBag) {
        console.log(values)

        formikBag.setSubmitting(false); 
    },

})(FormContact);