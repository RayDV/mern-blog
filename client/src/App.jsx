import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importing these modules allows for SPA with REACT
// BrowserRouter: Keeps UI in sync with the URL
// Routes: Used to define a group of Routes. Each Route specifies a piece of UI that should be rendered based on the browers location
// Route: Used within Routes to define mapping between URL paths and REACT components. This allows us to build a navigable application 
//        where different URLs correspond with different content screens or pages within our SPA
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/projects' element={<Projects/>} />
        </Routes>
    </BrowserRouter>
  )
}