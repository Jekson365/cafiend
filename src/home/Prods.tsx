import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorPrimary, MainButtonOutline, MainFontLight, MinorFont } from "../styles/styles"
import EachProd from "../components/EachProd"


const Prods = ({ variant }: { variant: boolean }) => {
    const arr = [1, 1, 1, 1, 1, 1]
    return (
        <>
            <Container
                sx={{ background: ColorPrimary, minHeight: "100vh", paddingBottom: "100px" }}
                maxWidth={false}
            >

                <Stack
                    sx={{ textAlign: { xs: "center", md: "inherit" } }}
                    direction={'column'} gap={'10px'} alignItems={'center'} pt={20} mb={0}>
                    <Typography
                        fontFamily={MinorFont}
                        variant="h2"
                    >OUR BLENDS DELIVER
                    </Typography>
                    {variant ? <Typography
                        fontWeight={'bold'}
                        fontFamily={MainFontLight}
                    >Hot, Cold, Sweet or straight up, we've got the brew for you.
                    </Typography> : ""}
                    {variant ? <MainButtonOutline sx={{ "marginTop": "10px" }}>ALL PRODUCT</MainButtonOutline> : ""}
                </Stack>
                <Box sx={{ maxWidth: "1400px", margin: "40px auto" }}>
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