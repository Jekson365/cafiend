import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Testimonial = () => {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{ background: ColorPrimary, height: "fit-content",padding:"70px 0"}}
            >
                <Box
                    sx={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Stack
                        textAlign={'center'}
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{ marginTop: { xs: "0", md: "0px" },paddingTop:{xs:"40px",md:"0"}}}
                    >

                        <Typography
                            fontFamily={MinorFont}
                            sx={{ fontSize: { xs: "40px", md: "70px" } }}
                        >OUR TESTIMONIAL</Typography>
                        <Typography fontFamily={MinorFont} fontSize={'80px'}>"</Typography>
                        <Grid container columns={12}>
                            <Grid item xs={1}
                                display={'flex'}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <Box
                                    width={'60px'}
                                    height={'60px'}
                                    justifyContent={'center'}
                                    display={'flex'}
                                    alignItems={"center"}
                                    mb={10}
                                    border={`1px solid ${ColorDark}`}
                                >

                                    <ArrowBackIosIcon sx={{ transform: "translateX(5px)" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Stack>
                                    <Typography
                                        fontFamily={MainFontLight}
                                        fontWeight={'bold'}
                                        sx={{ fontSize: { xs: "15px", md: "20px" } }}
                                        p={3}
                                    >"I'm a very stubborn person. I think it has helped me over my career. I'm sure it has hindered me at times as well, but not too many times. I know that if I set my mind to do something,I will achieve it."</Typography>
                                    <Typography variant="h3"
                                        mt={5}
                                        fontFamily={MinorFont}
                                    >RENIE JOHN</Typography>
                                    <Typography variant="h6"
                                        fontFamily={MainFontLight}
                                    >OWNER</Typography>
                                </Stack>
                            </Grid>
                            <Grid
                                item xs={1}
                                display={'flex'}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <Box
                                    width={'60px'}
                                    height={'60px'}
                                    mb={10}
                                    justifyContent={'center'}
                                    display={'flex'}
                                    alignItems={"center"}
                                    border={`1px solid ${ColorDark}`}
                                >
                                    <ArrowForwardIosIcon />
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Container >
        </>
    )
}

export default Testimonial