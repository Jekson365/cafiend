import { Box, CardMedia, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Location = () => (
    <>
        <Container
            maxWidth={false}
            sx={{ background: ColorDark, padding: "100px 20px" }}
        >
            <Box
                maxWidth={"1350px"}
                margin={"0 auto"}
                display={"flex"}
                justifyContent={'center'}
            >
                <Grid container columns={24} spacing={3}>
                    <Grid item xs={24} md={16}>
                        <Box
                            sx={{ minHeight: "450px", background: ColorPrimary, borderRadius: "10px" }}
                        >
                            <Grid container columns={12} height={'100%'}>
                                <Grid item xs={12} md={6} height={'450px'} display={'flex'} justifyContent={"center"} alignItems={'center'}>
                                    <Stack
                                        p={5}
                                        textAlign={'center'}
                                        gap={'5px'}
                                        direction={'column'} alignItems={'center'} fontFamily={MainFontLight}>
                                        <LocationOnIcon sx={{ fontSize: "50px" }} />
                                        <Typography
                                            color={ColorDark}
                                            fontSize={'40px'}
                                            fontFamily={MinorFont}
                                            fontWeight={'bold'}>FIND EASILY</Typography>
                                        <Typography
                                            color={ColorDark}
                                            fontSize={'15px'}
                                            fontFamily={MainFontLight}
                                            fontWeight={'bold'}>The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom</Typography>
                                        <Typography
                                            color={ColorDark}
                                            fontSize={'15px'}
                                            fontFamily={MainFontLight}
                                            fontWeight={'bold'}>peacefulqode@gmail.com</Typography>
                                        <Typography
                                            color={ColorDark}
                                            fontSize={'15px'}
                                            fontFamily={MainFontLight}
                                            fontWeight={'bold'}>+ (567) 1234-567-8900</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6} p={2}>
                                    <Box
                                        width={"100%"}
                                        bgcolor={'red'}
                                        height={"100%"}
                                    >
                                        <CardMedia
                                            width={'100%'}
                                            height={'100%'}
                                            component={'img'}
                                            src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={24} md={8}>
                        <Box sx={{ minHeight: "450px", background: ColorPrimary, borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Stack
                                direction={'column'}
                                alignItems={"center"}
                                gap={'10px'}
                                sx={{ padding: { xs: "40px", md: "10px" } }}
                            > <Typography
                                color={ColorDark}
                                fontSize={'40px'}
                                fontFamily={MinorFont}
                                fontWeight={'bold'}>OPENING HOURS</Typography>
                                <Typography
                                    color={ColorDark}
                                    fontSize={'15px'}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}>
                                    Monday...................8am - 10pm
                                </Typography>
                                <Typography
                                    color={ColorDark}
                                    fontSize={'15px'}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}>
                                    Tuesday..................8am - 10pm
                                </Typography>
                                <Typography
                                    color={ColorDark}
                                    fontSize={'15px'}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}>
                                    Wednesday................8am - 10pm
                                </Typography>
                                <Typography
                                    color={ColorDark}
                                    fontSize={'15px'}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}>
                                    Thirsday.................8am - 10pm
                                </Typography>
                                <Typography
                                    color={ColorDark}
                                    fontSize={'15px'}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}>
                                    Friday...................8am - 10pm
                                </Typography>
                                <Typography
                                    color={ColorDark}
                                    fontSize={'15px'}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}>
                                    Saturday.................8am - 10pm
                                </Typography>
                                <Typography
                                    color={ColorDark}
                                    fontSize={'15px'}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}>
                                    Sunday...................8am - 10pm
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </>
)

export default Location