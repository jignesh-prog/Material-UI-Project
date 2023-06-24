import {useAuth} from './Auth'
import { useNavigate } from 'react-router-dom'
export const Required = ({children}:any) => {
    const navigate = useNavigate()
    const auth = useAuth()
    if(!auth.user) {
      navigate('/',{replace:true})
    }
   
  return (
    children
  )
}

export default Required
