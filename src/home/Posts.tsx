import { Box, Container, Grid, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MinorFont } from "../styles/styles"
import EachPost from "../components/EachPost"

export const arr = [
    {
        id: 1,
        desc:"Coffee is a popular beverage enjoyed by millions of people around the world.",
        date: "Apr 25,2001",
        title: "COFFEE: FUEL FOR PRODUCTIVITY AND FOCUS",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c2902b1b537f645d07c9_6443ba54668ffdf536cf1eb6_1-p-500%20(8).png",
    },
    {
        id: 2,
        desc:"Coffee is a popular beverage enjoyed by millions of people around the world.",
        date: "Apr 25,2001",
        title: "THE CULTURE AND HISTORY OF COFFEE.",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c046ea3c139d2e0e60b8_6443ba54668ffdf536cf1eb6_1-p-500%20(4).png",
    },
    {
        id: 3,
        desc:"Coffee is a popular beverage enjoyed by millions of people around the world.",
        date: "Apr 25,2001",
        title: "COFFEE: A STIMULANT FOR CREATIVITY.",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c035f2864aedbfe59c8d_6443ba54668ffdf536cf1eb6_1-p-500%20(3).png"
    },
    {
        id: 1,
        desc:"Coffee is a popular beverage enjoyed by millions of people around the world.",
        date: "Apr 25,2001",
        title: "BOLD AND SMOOTH: COFFEE DELIGHT",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c63e73e42e9f79ca06de_6443ba54668ffdf536cf1eb6_1-p-500%20(8)%20(4).png",
    },
    {
        id: 2,
        desc:"Coffee is a popular beverage enjoyed by millions of people around the world.",
        date: "Apr 25,2001",
        title: "FROM BEAN TO CUP: COFFEE JOURNEY.",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c62feae6eace8bd302be_6443ba54668ffdf536cf1eb6_1-p-500%20(8)%20(3).png",
    },
    {
        id: 3,
        desc:"Coffee is a popular beverage enjoyed by millions of people around the world.",
        date: "Apr 25,2001",
        title: "COFFEE: A STIMULANT FOR CREATIVITY.",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c5b712cafd64d0905f09_6443ba54668ffdf536cf1eb6_1-p-500%20(8)%20(2).png"
    },

]
const Posts = () => {
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
                        {arr.slice(0, 3).map((each) => {
                            return (
                                <>
                                    <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
                                        <EachPost post={each} />
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

export const hv = {
    "&:hover": {
        "transform": "scale(1.5)",
    },
    "transition": "1.9s",
    "cursor": "pointer"
}

export default Posts