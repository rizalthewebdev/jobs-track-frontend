import React, { useState } from 'react'
import {useAppContext} from '../../context/appContext'
import Input from '../Input'

const UserProfile = () => {
  const {user, isLoading, showAlert, displayAlert, updateUser} = useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)

  return (
    <>
        <div className="title-page">
          Profile
        </div>

        <div className="w-full px-5 py-5 md:px-16 flex gap-x-3 gap-y-7 flex-col md:flex-row justify-center md:justify-start items-center">
          <Input
            label="Name"
            inputType="text"
            inputName="name"
            inputId="name"
            value={name}
            setValue={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            inputType="email"
            inputName="email"
            inputId="email"
            value={email}
            setValue={(e) => setEmail(e.target.value)}
          />
          <button className='cta-button--primary poppins justify-self-end rounded-md'>Update</button>
        </div>
    </>
  )
}

export default UserProfile