import { IDegree } from '@/interface/IDegree';
import { Field, Form, Formik } from 'formik';
import React from 'react'

export default function FormikDegreeTask() {

    let initialValues:IDegree = {
      
        fullStack: false,
        frontEnd: false,
        backEnd: false,
       
    
    };
  return (
    

    <Formik initialValues={initialValues} onSubmit={(values:IDegree) => console.log(values)}>

    {({values:IDegree}) => (

          <Form>
                <label htmlFor="fullStack">FullStack</label>
                <Field type="checkbox" name="fullStack" onClick={()=>{
                    
                    
                        
                        
                    
                    }} />

                 <label htmlFor="frontEnd">FrontEnd</label>
                <Field type="checkbox" name="frontEnd" />

                <label htmlFor="B">FullStack</label>
                <Field type="checkbox" name="backEnd" />
 
                 <button type="submit">Submit</button>
         </Form>

    )} 
       
    </Formik>
  )
}
