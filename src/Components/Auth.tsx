import React,{createContext,useState,useContext} from 'react'

const AuthContext = createContext<any>(null)

export const AuthProvider = ({children}:any) => {
   const [user,setUser] = useState<null | string>('');
  
   const login2 = (user:any, password:any) => {
    setUser(user)
   }
 
   const logout = () => {
    setUser(null)
   }
  return (
    <AuthContext.Provider value={{user,login2,logout}} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
