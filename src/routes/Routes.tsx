import { Route, Routes } from "react-router"

//Pages
import Home from '../pages/Home/Home'
import CreateTask from "../pages/CreateTask/CreateTask"



const RoutePages = () => {
  return (

    <Routes>
<Route path="/" element={<Home />} />
<Route path="/create-tasks" element={<CreateTask/>} />
    </Routes>
  )
}

export default RoutePages