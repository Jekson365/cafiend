import { Box, CardMedia, Container, Grid, Stack, Typography } from "@mui/material"
import Banner from "../components/Banner"
import { arr, hv } from "../home/Posts"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"
import Instposts from "../home/Instposts"
import { useEffect } from "react"

const Blog = () => {
    useEffect(()=> {
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <Banner title='BLOG' />
            <Container
                maxWidth={false}
                sx={{ background: ColorPrimary, padding: "100px 30px" }}
            >
                <Typography
                    sx={{ textAlign: "center", fontSize: { xs: "40px", md: "60px" } }}
                    color={ColorDark}
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
                                        <Box sx={{ maxWidth: { xs: "90vw", md: "50vw" }, height: { xs: "92vw", md: "32vw" }, marginTop: { xs: "150px", md: "0" } }}>
                                            <Box
                                                overflow={'hidden'}
                                                borderRadius={"5px"}
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
                                                <Typography color={ColorDark} fontSize={'15px'} fontFamily={MainFontLight} fontWeight={'bold'}>Apr 25, 2020</Typography>
                                                <Typography color={ColorDark} fontSize={'28px'} fontFamily={MinorFont} fontWeight={'bold'}>{each.title}</Typography>
                                                <Typography color={ColorDark} fontSize={'16px'} fontFamily={MainFontLight} fontWeight={'bold'}>{each.desc}</Typography>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </Box>
            </Container>
            <Instposts />
        </>
    )
}

export default Blog