import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Category from './category/Category'
import Contact from './contact/Contact'
import Shop from './shop/Shop'
import Blog from './blog/Blog'
import Navigation from './components/Navigation'
import Notification from './components/Notification'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init()
  })


  return (
    <>
      <BrowserRouter>
        <Notification />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/category/:cat' element={<Category />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
