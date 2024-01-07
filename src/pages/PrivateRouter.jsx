import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = ()=> {
  
  const {shop} = useContext(LoginContext)
  return shop?.email && shop?.password ? <Outlet/> : <Navigate to="/login"/>

  
}

export default PrivateRouter
