import { ImyLogin } from '@/interface/ImyLogin'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function LoginPage() {

    const [inputs, setLogin] = useState<ImyLogin>({

        email: '',
        password: ''

    });
    useEffect(()=>{
        axios.post('https://real-pear-fly-kilt.cyclic.app/accounts/authenticate',inputs)
        
         .then(a=>{
             console.log(a.data);
         })
    })
  return (
    <div>LoginPage</div>
  )
}
