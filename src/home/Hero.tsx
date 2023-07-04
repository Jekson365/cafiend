import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainButtonWhite, MainFontLight, MinorFont } from "../styles/styles"

const Hero = () => {
    return (
        <>
            <Container
                sx={{ background: ColorDark }}
                maxWidth={false}
            >
                <Grid container columns={12}
                    maxWidth={'1400px'}
                    alignItems={'center'}
                    sx={{ 'margin': "0 auto", padding: "20px" }}>
                    <Grid item xs={12} md={7} >
                        <Box
                            data-aos='fade-right'
                            sx={{
                                marginTop: "50px",
                                width: "100%",
                                minHeight: { xs: "60vh", md: "100vh" },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column"
                            }}>
                            <Stack
                                direction={'column'}
                                sx={{ alignItems: { xs: "center", md: "flex-start" }, paddingRight: { xs: "0", md: "80px" }, textAlign: { xs: "center", md: "start" } }}
                                gap={"20px"}>
                                <Typography
                                    variant="h1"
                                    sx={{ fontFamily: MinorFont, color: ColorPrimary, fontSize: { xs: "45px", md: "100px" } }}
                                >
                                    REVIVE YOUR COFFEE LOVE
                                </Typography>
                                <Typography
                                    fontFamily={MainFontLight}
                                    color={ColorPrimary}
                                    fontWeight={'bold'}
                                    fontSize={"17px"}
                                >
                                    Coffee contains caffeine, a natural stimulant that can
                                    help increase alertness and reduce fatigue.It also contains antioxidants and other beneficial compounds.
                                </Typography>
                                <MainButtonWhite>
                                    View More Details
                                </MainButtonWhite>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{ "position": "relative" }}
                            data-aos='fade-left'
                        >
                            <img src='https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6448f1f0c5a8a12093bfddfb_Coffee_Png.webp'
                                style={{ 'width': "100%", height: "100%", objectFit: "cover" }}
                            />
                            <Box   
                                data-aos-delay='200'
                                data-aos='zoom-in'
                                sx={{"position":"absolute",bottom:"0",left:"0"}}
                            >
                                <img src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6443d1eaea3c13774b0f739e_Stamp.webp" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default Hero