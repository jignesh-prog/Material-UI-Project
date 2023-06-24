import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from './Auth'

export const Login2 = () => {
    const[user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
   const inputRef = useRef<any>(null)

    useEffect(() => {inputRef.current.focus()},[])

    const handleClick = () => {
      auth.login2(user)
      navigate('Dashbord')
    }
  return (
    <div>
      <label>
        userName
      </label>
      <input ref = {inputRef} onChange={(e) => setUser(e.target.value)}/>
     
      <button onClick={handleClick}>Login2</button>
    </div>
  )
}

export default Login2
