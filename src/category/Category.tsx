import { Container, Stack, Box, Grid } from "@mui/material"
import Banner from "../components/Banner"
import { Products, Product } from "../data/Products"
import { ColorDark, ColorPrimary, MainButtonOutline } from "../styles/styles"
import Eachitem from "../components/Eachitem"
import { useEffect } from "react"

const Category = () => {
  const currentCat = window.location.href.split("/")[4]

  useEffect(() => {
    console.log(currentCat)
  }, [])

  const redirect = (cat: String) => {
    window.location.href = `/category/${cat}`
  }
  return (
    <>
      <Banner title={'CATEGORY'} />
      <Container
        sx={{ background: ColorPrimary, minHeight: "100vh", paddingBottom: "100px" }}
        maxWidth={false}
      >

        <Stack
          sx={{ textAlign: { xs: "center", md: "inherit" } }}
          direction={'row'} gap={'20px'} alignItems={'center'} justifyContent={'center'} pt={20} mb={0}>
          <MainButtonOutline sx={btnStyles} onClick={() => redirect("all")}>
            All
          </MainButtonOutline>
          <MainButtonOutline sx={btnStyles} onClick={() => redirect("hot")}>
            Hot
          </MainButtonOutline>
          <MainButtonOutline sx={btnStyles} onClick={() => redirect("cold")}>
            Cold
          </MainButtonOutline>
          <MainButtonOutline sx={btnStyles} onClick={() => redirect("black")}>
            Black
          </MainButtonOutline>
        </Stack>
        <Box sx={{ maxWidth: "1400px", margin: "40px auto" }}>
          <Grid container columns={12} spacing={3}>
            {Products.filter((category) => {
              if (currentCat == 'all') {
                return category
              }
              else {
                return category.category == currentCat
              }
            }).map((prod: Product) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={4} >
                    <Eachitem prod={prod} />
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </>
  )
}
const btnStyles = { width: "120px", padding: "10px 30px", textTransform: "capitalize", color: ColorDark }
export default Category