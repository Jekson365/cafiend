import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Category from './category/Category'
import Contact from './contact/Contact'
import Shop from './shop/Shop'
import Blog from './blog/Blog'
import Navigation from './components/Navigation'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Footer from './components/Footer'
import Cart from './cart/Cart'
import { createContext } from 'react'
import Prodpage from './prodpage/Prodpage'


export const MyContext = createContext<any>("")

function App() {
  useEffect(() => {
    AOS.init()
  })

  const [open, setOpen] = useState<any>(false)


  return (
    <>
      <BrowserRouter>
        {/* <div style={{ 'overflow': "hidden" }}> */}
        <MyContext.Provider value={{ open, setOpen }}>
          <Cart />
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/category/:cat' element={<Category />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/product/:prod' element={<Prodpage />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
        {/* </div > */}
      </BrowserRouter>
    </>
  )
}

export default App
