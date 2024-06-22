import { IPostApi } from '@/interface/IPostApi';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function PostDataInApi() {

    const [data,setData] = useState<IPostApi>({

        
            firstName : "weltec",
            lastName:"Institute",
            title: "weltec",
            email:"we@w.com",
            password:"test@123",
            confirmPassword:"test@123",
            acceptTerms:true
          
 });
 const [error, setError] = useState<string | null>(null);
     

  useEffect(()=> {

     axios.post('https://real-pear-fly-kilt.cyclic.app/accounts/register',data)
        .then(a=>{

            setData(a.data)
            console.log(a.data);

            
        }).catch(err => {
            setError(err.message);
            console.error("There was an error making the request:", err)});


    },[data])

  return (
    <div>
    <h1>Post Data to API</h1>
    {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
    ) : (
        <p>Data successfully posted!</p>
    )}
</div>

  )
}
