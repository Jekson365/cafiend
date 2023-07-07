import Banner from "../components/Banner"
import Instposts from "../home/Instposts"
import Form from "./Form"
import Location from "./Location"

const Contact = () => {
  return (
    <>
      <Banner title={'CONTACT US'}/>
      <Form/>
      <Location/>
      <Instposts/>
    </>
  )
}

export default Contact