import { Box, Container, Grid, Typography } from "@mui/material"
import Banner from "../components/Banner"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"
import Gallery from "./Gallery"
import Timeline from "./Timeline"
import { useEffect } from "react"


const About = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <Banner title={'ABOUT US'} />
      <Container
        maxWidth={false}
        sx={{ background: ColorPrimary, padding: "150px 0", position: "relative" }}
      >
        <div className="lineee"></div>
        <Box maxWidth={'1400px'} margin={"0 auto"}>
          <Grid container columns={12}>
            <Grid item xs={12} md={6}>
              <Typography
                color={ColorDark}
                fontFamily={MinorFont}
                sx={{ marginLeft: { xs: "20px", md: "80px" }, fontSize: { xs: "50px", md: "65px" } }}
                data-aos='fade-right'
              >
                THE PERFECT PAIRING: COFFEE AND DESSERTS COMPLEMENT EACH OTHER
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                color={ColorDark}
                data-aos='fade-left'
                mt={3}
                fontSize={'17px'}
                fontWeight={'bold'}
                fontFamily={MainFontLight}
                width={'90%'}
                sx={{ marginLeft: { xs: "20px", md: "80px" } }}
              >
                Coffee is a popular and beloved beverage that is made from roasted coffee beans, which come from the berries of the
                Coffee a plant. The drink is enjoyed by millions of people.
                Coffee is often enjoyed as a morning or afternoon pick-me-up, but it can also be savored as a relaxing and enjoyable beverage
                . In addition to its taste and aroma, coffee has been shown to have a variety of health benefits, including increased alertness
                and improved mental focus. It is also a source of antioxidants and other beneficial compounds.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Gallery />
      <Timeline />
    </>
  )
}

export default About