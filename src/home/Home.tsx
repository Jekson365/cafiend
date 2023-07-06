import Footer from "../components/Footer"
import Benefits from "./Benefits"
import Hero from "./Hero"
import Instposts from "./Instposts"
import Posts from "./Posts"
import Prods from "./Prods"
import Testimonial from "./Testimonial"
import VidSection from "./VidSection"

const Home = () => {
  return (
    <>
      <Hero/>
      <Prods/>
      <VidSection/>
      <Benefits/>
      <Testimonial/>
      <Posts/>
      <Instposts/>
      <Footer/>
    </>
  )
}

export default Home