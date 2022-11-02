import {useState, useContext, createContext} from 'react'
import { View, Text } from 'react-native'
const AuthContext = createContext();


const AuthProvider = ({children}) => {
  const [logueado, setLogueado] = useState(false);
  return <AuthContext.Provider value={{logueado, setLogueado}}>
    {children}
  </AuthContext.Provider>
  
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider 