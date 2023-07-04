import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorPrimary, MainButtonOutline, MainFontLight, MinorFont } from "../styles/styles"
import EachProd from "../components/EachProd"


const Prods = () => {
    const arr = [1, 1, 1, 1, 1, 1]
    return (
        <>
            <Container
                sx={{ background: ColorPrimary, minHeight: "100vh" }}
                maxWidth={false}
            >

                <Stack
                    sx={{ textAlign: { xs: "center", md: "inherit" } }}
                    direction={'column'} gap={'10px'} alignItems={'center'} pt={20} mb={6}>
                    <Typography
                        fontFamily={MinorFont}
                        variant="h2"
                    >OUR BLENDS DELIVER
                    </Typography>

                    <Typography
                        fontWeight={'bold'}
                        fontFamily={MainFontLight}
                    >Hot, Cold, Sweet or straight up, we've got the brew for you.
                    </Typography>

                    <MainButtonOutline sx={{ "marginTop": "10px" }}>ALL PRODUCT</MainButtonOutline>
                </Stack>
                <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <Grid container columns={12} spacing={3}>
                        {arr.map(() => {
                            return (
                                <>
                                    <Grid item xs={12} sm={6} md={4} >
                                        <EachProd />
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

export default Prods