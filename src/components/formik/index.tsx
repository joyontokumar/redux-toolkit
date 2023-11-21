import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Joi from "joi";
const FormikValidationForm = () => {
  const schemaValidation = Joi.object({
    firstName: Joi.string().required().messages({
      "string.empty": "First Name is required",
    }),
    lastName: Joi.string().required().messages({
      "string.empty": "Last Name is required",
    }),
  });

  // const handleSubmit = (values: any) => {
  //   console.log("get values", values);
  // };

  const addsessionstorage = () => {
    window.sessionStorage.setItem("abc", "joyonto kumar roy");
  };

  return (
    <div className="formik-form">
      <div className="container">
        <h4>React Formik</h4>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
          }}
          validationSchema={schemaValidation}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="inner-form">
              <div className="single-field">
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div className="single-field">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="single-field">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <button onClick={addsessionstorage}>save data session storage</button>
    </div>
  );
};

export default FormikValidationForm;
