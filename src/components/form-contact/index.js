import React from 'react';
import { withFormik, Field, ErrorMessage } from 'formik';
import '../buttons/index.js'
import './styles.css'

function FormContact(props) {

    const {
        handleSubmit,
        isSubmitting,
        errors,
    } = props

    return (
        <React.Fragment>
            <header>Comentanos, ¿Como podemos ayudarte?</header>
            <div className="form-contact-message">
                <div>
                    Te responderemos en el plazo de 1 día laborable o,
                    si lo prefieres llamanos al <span>(+55) 68 213 639</span>
                </div>
            </div>
            <form className="form-contact-body" onSubmit={handleSubmit}>
                <div className="form-contact-fieldset">
                    <label>Nombre: </label>
                    <Field type="text" name="name" className="form-contact-fieldset-field" />
                    <ErrorMessage name="name">
                        {message => <div className="form-contact-fieldset-msg">
                            {message}
                        </div>}
                    </ErrorMessage>
                </div>
                <div className="form-contact-fieldset">
                    <label>Empresa: </label>
                    <Field type="text" name="company" className="form-contact-fieldset-field" />
                    <ErrorMessage name="company">
                        {message => <div className="form-contact-fieldset-msg">
                            {message}
                        </div>}
                    </ErrorMessage>
                </div>
                <div className="form-contact-fieldset">
                    <label>Email: </label>
                    <Field type="email" name="email" className="form-contact-fieldset-field" />
                    <ErrorMessage name="email">
                        {message => <div className="form-contact-fieldset-msg">
                            {message}
                        </div>}
                    </ErrorMessage>
                </div>
                <div className="form-contact-fieldset">
                    <label>Telefono: </label>
                    <Field type="text" name="phone" className="form-contact-fieldset-field"/>
                    <ErrorMessage name="phone">
                        {message => <div className="form-contact-fieldset-msg">
                            {message}
                        </div>}
                    </ErrorMessage>
                </div>
                <div className="form-contact-fieldset form-contact-fieldset--textarea">
                    <label>¿En que podemos apoyarte?: </label>
                    <Field 
                        component="textarea"
                        name="comments"
                        cols="30"
                        rows="10"
                        className="form-contact-fieldset-textarea"
                    ></Field>
                    <ErrorMessage name="comments">
                        {message => <div className="form-contact-fieldset-msg">
                            {message}
                        </div>}
                    </ErrorMessage>
                </div>
                <div className="form-contact-button">
                    <button type="submit" className="primary" disabled={isSubmitting}>
                        Enviar
                    </button>
                </div>
            </form>
        </React.Fragment>
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