import { Iformik } from '@/interface/Formik';
import { Field, Form, Formik } from 'formik';
import React from 'react'

export default function FormikForm() {

 let initialValues: Iformik={
    firstName: '',
    lastName: '',
    email: '',
  };
 
  return (

    <Formik

    initialValues={initialValues}

    onSubmit={ (values:Iformik) => {

        console.log(values);
      
    }}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" /><br /><br />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" /><br /><br />

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      /> <br /> <br />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}
