import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
  const navigate = useNavigate()
if(localStorage.getItem('user')){
    const {user} = JSON.parse(localStorage.getItem('user') as string)
    if(user.role !==1){
       return navigate('/signin')
    }
    return props.children
}
else{
  navigate('/signin')
}
}

export default PrivateRouter