import Benefits from "./Benefits"
import Hero from "./Hero"
import Instposts from "./Instposts"
import Posts from "./Posts"
import Prods from "./Prods"
import Testimonial from "./Testimonial"
import VidSection from "./VidSection"
import { useEffect } from "react"

const Home = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Hero/>
      <Prods variant={true}/>
      <VidSection/>
      <Benefits/>
      <Testimonial/>
      <Posts/>
      <Instposts/>
    </>
  )
}

export default Home