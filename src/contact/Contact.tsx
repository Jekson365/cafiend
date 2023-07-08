import { useEffect } from "react"
import Banner from "../components/Banner"
import Instposts from "../home/Instposts"
import Form from "./Form"
import Location from "./Location"

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <Banner title={'CONTACT US'} />
      <Form />
      <Location />
      <Instposts />
    </>
  )
}

export default Contact