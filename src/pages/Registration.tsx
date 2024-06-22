
import { IRegistration } from '@/interface/IRegistration'
import React, { useState } from 'react'

export default function Registration() {

    const [form , setForm] = useState<IRegistration>({
      firstName: '',
      lastName: '',
      isActive: false,
    })

const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        
    setForm({...form,[e.target.name]: e.target.type =="checkbox"? e.target.checked: e.target.value});

   }


  const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>): void=>{
  e.preventDefault();
    console.log(form);
}

  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" name='firstName' onChange={handleChange}/>
            <input type="text" name='lastName' onChange={handleChange}/>
            <input type="checkbox" name='isActive' onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
