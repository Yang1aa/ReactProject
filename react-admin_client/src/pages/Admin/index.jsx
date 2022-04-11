import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import memoryUtils from '../../utils/memoryUtils'


const Admin = () => {
  const navigate = useNavigate();
  const user = memoryUtils.user;
  useEffect(() => {
    if (JSON.stringify(user) === '{}') {
      navigate('/login')
      console.log('1111');
    }
  })
  console.log('user', user);
  return (
    <div>hello {user._id}</div>
  )
}
export default Admin;