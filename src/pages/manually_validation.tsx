import { IProfile } from '@/interface/IProfile';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Span } from 'next/dist/trace';
import React from 'react'

export default function manually_validation() {

  const initialValues : IProfile = {
    firstName : "",
    lastName : "",
    email : "",
   
   
  };
  const validateData = (data:IProfile) : Partial<IProfile>=>{

    let error : Partial<IProfile> = {
    };

    if(!data.firstName)
      {
        error.firstName = "Please Enter firstName"
      }
     if(!data.lastName)
      {
        error.lastName = "Please Enter lastName"
      }
     if(!data.email)
      {
        error.email = "Please Enter email"
      }

      
    return error;

  }
  return (
  

    <Formik


    initialValues= {initialValues}

    validate ={validateData}

    onSubmit={ (values:IProfile) => {

        console.log(values);
      
    }}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" /><br /><br />
      <ErrorMessage name='firstName' component='div'/>

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" /><br /><br />
      <ErrorMessage name='lastName' component='div'/>

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      /> <br /> <br />
       <ErrorMessage name='email' component='div'/>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}
