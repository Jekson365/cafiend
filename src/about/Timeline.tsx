import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"

const Timeline = () => {
    return (
        <>
            <Container
                sx={{ background: ColorPrimary, padding: "100px 0" }}
                maxWidth={false}
            >
                <Typography
                    textAlign={'center'}
                    fontSize={{ xs: "30px", md: "50px" }}
                    fontFamily={MinorFont}
                    mb={10}
                >OUR TIMELINE
                </Typography>
                <Box
                    maxWidth={'900px'}
                    margin={"0 auto"}
                    position={'relative'}
                >
                    <div className="dot d-1"></div>
                    <div className="dot d-2"></div>
                    <div className="dot d-3"></div>
                    <div className="dot d-4"></div>
                    <div className="lineee"></div>
                    <Grid container columns={12} rowSpacing={3}>
                        <Grid item xs={12} container>
                            <Grid item xs={0} sx={{ display: { xs: "none", md: "block" } }} md={6}></Grid>
                            <Grid item xs={12} md={6}>
                                <Stack
                                    paddingLeft={5}
                                    width={'80%'}
                                    gap={'15px'}
                                    data-aos="fade-left"
                                    
                                    direction={'column'} alignItems={'flex-start'}>
                                    <Typography
                                        textAlign={'center'}
                                        variant="h4"
                                        fontFamily={MinorFont}
                                        >2000</Typography>
                                    <Typography
                                        color={ColorDark}
                                        fontFamily={MainFontLight}
                                        fontWeight={'bold'}
                                        fontSize={'17px'}
                                    >
                                        Coffee is introduced to the Arabian Peninsula, where it becomes popular as a stimulating drink. The world's first coffee shops are opened in UK.
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container>
                            <Grid item xs={12} md={6}>
                                <Stack
                                    width={'80%'}
                                    data-aos="fade-right"
                                    gap={'15px'}
                                    direction={'column'}
                                    textAlign={'right'}
                                    alignItems={'flex-end'}
                                    
                                    sx={{ alignItems: { xs: "flex-start", md: "flex-end", textAlign: { xs: "left", md: "right", paddingRight: { xs: "0", md: "40px" } } }, paddingLeft: "40px" }}
                                    >
                                    <Typography
                                        textAlign={'left'}
                                        variant="h4"
                                        fontFamily={MinorFont}
                                    >2010</Typography>
                                    <Typography
                                        fontWeight={'bold'}
                                        color={ColorDark}
                                        fontFamily={MainFontLight}
                                        >
                                        Coffee becomes an important commodity in international trade, particularly in the Middle East and Europe.The first machine is invented in Italy.
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item xs={0} sx={{ display: { xs: "none", md: "block" } }} md={6}></Grid>
                        <Grid item xs={12} container>
                            <Grid item xs={0} sx={{ display: { xs: "none", md: "block" } }} md={6}></Grid>
                            <Grid item xs={12} md={6}>
                                <Stack
                                    paddingLeft={5}
                                    width={'80%'}
                                    data-aos="fade-left"
                                    gap={'15px'}
                                    direction={'column'} alignItems={'flex-start'}>
                                    <Typography
                                        textAlign={'center'}
                                        variant="h4"
                                        fontFamily={MinorFont}
                                        >2016</Typography>
                                    <Typography
                                        color={ColorDark}
                                        fontFamily={MainFontLight}
                                        fontWeight={'bold'}
                                    >
                                        Coffee consumption continues to grow around the world, and innovations in transportation and technology make it easier to produce and distribute coffee on a large scale.
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container>
                            <Grid item xs={12} md={6}>
                                <Stack
                                    direction={'column'}
                                    data-aos="fade-right"
                                    textAlign={'right'}
                                    alignItems={'flex-end'}
                                    width={'80%'}
                                    gap={'15px'}
                                    sx={{ alignItems: { xs: "flex-start", md: "flex-end", textAlign: { xs: "left", md: "right", paddingRight: { xs: "0", md: "40px" } } }, paddingLeft: "40px" }}
                                    >
                                    <Typography
                                        textAlign={'left'}
                                        variant="h4"
                                        fontFamily={MinorFont}
                                        >2020</Typography>
                                    <Typography
                                        fontWeight={'bold'}
                                        color={ColorDark}
                                        fontFamily={MainFontLight}
                                        >
                                        Coffee continues to be one of the most popular beverages in the world, with millions of people enjoying it every day. New brewing techniques and flavors continue to emerge.
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item xs={0} sx={{ display: { xs: "none", md: "block" } }} md={6}></Grid>
                    </Grid>
                </Box>
            </Container >
        </>
    )
}

export default Timeline