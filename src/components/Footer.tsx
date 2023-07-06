import { Box, CardMedia, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <Container
                sx={{ background: ColorDark }}
                maxWidth={false}

            >
                <Box maxWidth={'1400px'} margin={'0 auto'} padding={'50px'}>
                    <Grid container columns={12} alignItems={'flex-start'} display={'flex'} spacing={3}>
                        <Grid item xs={12} md={4} data-aos='fade-right'>
                            <Stack direction={'column'} gap={'15px'} alignItems={'flex-start'}>
                                <Typography
                                    color={ColorPrimary}
                                    variant="h4"
                                    fontFamily={MinorFont}
                                >
                                    CONTACT US
                                </Typography>
                                <Typography
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}>
                                    webflow,shop no.24 Fifth,USA
                                </Typography>
                                <Typography
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}>
                                    peacefulqode@gmail.com
                                </Typography>
                                <Typography
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}
                                >
                                    +1800-001-658
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4} data-aos='fade-up'>
                            <Stack
                                direction={'column'}
                                alignItems={'center'}
                                sx={{ alignItems: { xs: "flex-start", md: "center" }, textAlign: { xs: "start", md: "center" } }}
                                gap={'15px'}
                            >
                                <Link to={'/'}>
                                    <CardMedia
                                        component={'img'}
                                        src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/646b51cfa94bf985becf7a2c_footer_Coffe_logo%20(1).svg"
                                        sx={{ width: "150px" }}
                                    />
                                </Link>
                                <Typography
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}
                                    textAlign={'center'}
                                >
                                    Hot, Cold, Sweet or straight up, we've got<br /> the brew for you.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4} data-aos='fade-left'>
                            <Stack direction={'column'} gap={'15px'} sx={{ alignItems: { xs: "flex-start", md: "flex-end" } }}>
                                <Typography
                                    color={ColorPrimary}
                                    variant="h4"
                                    fontFamily={MinorFont}
                                >
                                    OPEN HOUR
                                </Typography>
                                <Typography
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}>
                                    Monday-Friday: 09:00-20:00
                                </Typography>
                                <Typography
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}>
                                    Saturday:  09:00-18:00
                                </Typography>
                                <Typography
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}
                                >
                                    Sunday: 09:00-18:00
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Footer