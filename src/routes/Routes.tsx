import { Route, Routes } from "react-router"

//Pages
import Home from '../pages/Home/Home'
import Create from "../pages/Create/Create"



const RoutePages = () => {
  return (

    <Routes>
<Route path="/" element={<Home />} />
<Route path="/create" element={<Create/>} />
    </Routes>
  )
}

export default RoutePages