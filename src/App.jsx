
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
          />
    <Navbar/>
    <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
