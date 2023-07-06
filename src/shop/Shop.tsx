import { useEffect } from "react"
import Banner from "../components/Banner"
import Instposts from "../home/Instposts"
import Prods from "../home/Prods"

const Shop = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Banner title={"SHOP"} />
      <Prods variant={false} />
      <Instposts />
    </>
  )
}

export default Shop