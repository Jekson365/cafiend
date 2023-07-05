import { Box, CardMedia, Container, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight } from "../styles/styles"

const VidSection = () => {
    return (
        <>
            <Container
                sx={{ background: ColorDark, minHeight: "60vh", paddingBottom: "0", padding: "0 !important" }}
                maxWidth={false}
            >
                <Stack
                    height={'100%'}
                    direction={'column'}
                    justifyContent={'center'}
                    gap={'50px'}
                    alignItems={'center'}>
                    <Box sx={{ width: { xs: "100%", md: "60%" } }} mt={10}>
                        <Typography sx={{ fontSize: { xs: "13px", md: "17px" } }}
                            color={ColorPrimary}
                            fontWeight={'bold'}
                            textAlign={'center'}
                            fontFamily={MainFontLight}>
                            Coffee can be enjoyed in a variety of forms, from a
                            simple cup of black coffee to more elaborate drinks
                            like lattes and cappuccinos. It is a popular social
                            beverage and often enjoyed as a part of social gatherings
                            meetings, or alone as a moment of relaxation.
                        </Typography>
                    </Box>
                    <Box
                        width={'100%'}
                        sx={{ height: { xs: "30vh", md: "70vh" } }}
                        overflow={'hidden'}>
                        <CardMedia
                            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                            component={'video'}
                            src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6448aa4eef4ef804468a4158_pexels-kelly-2853794-3840x2160-24fps-transcode.mp4"
                        />
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default VidSection