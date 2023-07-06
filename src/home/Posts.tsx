import { Box, CardMedia, Container, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"

const Posts = () => {
    const arr = [
        {
            id: 1,
            title: "COFFEE: FUEL FOR PRODUCTIVITY AND FOCUS",
            img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c2902b1b537f645d07c9_6443ba54668ffdf536cf1eb6_1-p-500%20(8).png",
        },
        {
            id: 2,
            title: "THE CULTURE AND HISTORY OF COFFEE.",
            img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c046ea3c139d2e0e60b8_6443ba54668ffdf536cf1eb6_1-p-500%20(4).png",
        },
        {
            id: 3,
            title: "COFFEE: A STIMULANT FOR CREATIVITY.",
            img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c035f2864aedbfe59c8d_6443ba54668ffdf536cf1eb6_1-p-500%20(3).png"
        }
    ]
    return (
        <>
            <Container
                maxWidth={false}
                sx={{ background: ColorDark, padding: "100px 0" }}
            >
                <Typography
                    sx={{ textAlign: "center", fontSize: { xs: "40px", md: "60px" } }}
                    color={ColorPrimary}
                    fontFamily={MinorFont}

                >
                    OUR RECENT POSTS
                </Typography>
                <Box
                    sx={{ maxWidth: "1400px", display: 'flex', justifyContent: "center", margin: "50px auto", alignItems: "center" }}
                >
                    <Grid container columns={12} spacing={5} display={'flex'} alignItems={"center"} justifyContent={"center"}>
                        {arr.map((each) => {
                            return (
                                <>
                                    <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
                                        <Box sx={{ maxWidth: { xs: "90vw", md: "50vw" }, height: { xs: "92vw", md: "32vw" }, marginTop:{xs:"100px",md:"0"} }}>
                                            <Box
                                                overflow={'hidden'}
                                            >
                                                <CardMedia
                                                    component={'img'}
                                                    width={'100%'}
                                                    height={'100%'}
                                                    src={each.img}
                                                    sx={hv}
                                                />
                                            </Box>
                                            <Stack direction={'column'} alignItems={'flex-start'} mt={3}>
                                                <Typography color={ColorPrimary} fontSize={'15px'} fontFamily={MainFontLight} fontWeight={'bold'}>Apr 25, 2020</Typography>
                                                <Typography color={ColorPrimary} fontSize={'28px'} fontFamily={MinorFont} fontWeight={'bold'}>{each.title}</Typography>
                                            </Stack>
                                        </Box>
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

const hv = {
    "&:hover": {
        "transform": "scale(1.5)",
    },
    "transition": "1.9s",
    "cursor": "pointer"
}

export default Posts