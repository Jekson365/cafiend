import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"

const Gallery = () => {
    return (
        <>
            <Container
                sx={{ margin: "0 auto", background: ColorDark, padding: { xs: "35px", md: "70px" } }}
                maxWidth={false}
            >
                <Box maxWidth={'900px'} margin={'0 auto'}>
                    <Grid container columns={12} display={'flex'} alignItems={'center'} spacing={5}>
                        <Grid xs={12} item md={6}>
                            <Stack direction={'column'} gap={'50px'}>
                                <img className="gal-image" style={{ borderRadius: "10px" }} src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440db9f94b6439451289419_1.webp" />
                                <img className="gal-image" style={{ borderRadius: "10px" }} src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440db9fade4cff8b70fea1e_2.webp" />
                            </Stack>
                        </Grid>
                        <Grid xs={12} item md={6}>
                            <Stack direction={'column'}>
                                <Typography sx={{ fontSize: { xs: "30px", md: "50px" }, color: ColorPrimary, fontFamily: MinorFont }}>
                                    THE JOURNEY OF COFFEE FARM
                                </Typography>
                                <Typography sx={{ fontSize: "17px", color: ColorPrimary, fontFamily: MainFontLight, fontWeight: "bold" }}>
                                    Coffee is a brewed drink made from roasted coffee beans, which are the seeds of berries from the Coffee a plant.
                                </Typography>
                                <img
                                    style={{ marginTop: "40px", borderRadius: "10px" }}
                                    className="gal-image"
                                    src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6443cd20b67dfee93b3fbe1e_About-3.webp" />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Gallery