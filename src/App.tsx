import { BrowserRouter as Router} from 'react-router'
import './App.css'
import RoutePages from '../src/routes/Routes.tsx'

// components
import Header from './components/Header'
import Footer from './components/footer.tsx'




function App() {


  return (
<Router>
        <Header />
    <RoutePages />
    <Footer />
</Router>
  )
}

export default App
