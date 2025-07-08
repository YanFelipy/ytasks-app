import { Route, Routes } from "react-router"
import Home from '../pages/Home/home'



const RoutePages = () => {
  return (

    <Routes>
<Route path="/" element={<Home />} />

    </Routes>
  )
}

export default RoutePages