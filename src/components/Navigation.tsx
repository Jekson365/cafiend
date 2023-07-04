import { AppBar, Box, Stack, Toolbar, Typography, styled, Grid, Slide } from '@mui/material'
import { ColorDark, ColorPrimary, MinorFont } from '../styles/styles'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Search from './Search';




const Navigation = () => {
    const [nav, setNav] = useState<boolean>(true)
    const [search, setSearch] = useState<boolean>(false)

    return (
        <>
            <Search search={search} setSearch={setSearch} />
            <Box
            >
                <CustomAppBar
                    sx={{ marginTop: { xs: "0", md: "40px" }, zIndex: "1000" }}

                >
                    <CustomToolBar
                        sx={{ height: "80px" }}


                    >
                        <Grid
                            container
                            alignItems={"center"}
                            columns={12}
                        >
                            <Grid item xs={0} md={4}
                            >
                                <Slide direction='down' in={nav}>
                                    <Stack
                                        sx={{ ...stackStyles, zIndex: "-1000000" }}
                                    >
                                        <NavLink to={'/'}>
                                            <CustomText>
                                                Home
                                            </CustomText>
                                        </NavLink>
                                        <CustomText>
                                            pages
                                        </CustomText>
                                        <NavLink to={'/shop'}>
                                            <CustomText>
                                                shop
                                            </CustomText>
                                        </NavLink>
                                        <NavLink to={'/blog'}>
                                            <CustomText>
                                                blog
                                            </CustomText>
                                        </NavLink>
                                    </Stack>
                                </Slide>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Box
                                    sx={{ width: "150px", margin: { xs: "0 0", md: "0 auto" } }}
                                >
                                    <img
                                        style={{ "width": "100%", height: "100%", objectFit: "cover" }}
                                        src='https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/646b5185a94bf985becf351a_Coffe_logo%20(1).svg' />
                                </Box>
                            </Grid>
                            <Grid item xs={8} md={4}
                                sx={{ justifyContent: { xs: "flex-end", md: "flex-end", display: { xs: "flex", md: "block" } } }}
                            >
                                <Stack
                                    mr={3}
                                    gap={'20px'}
                                    justifyContent={'flex-end'}
                                    color={ColorDark}
                                    direction={"row"}
                                >
                                    <BarStyles
                                        onClick={() => setNav(!nav)}
                                        sx={{ display: { xs: "block", md: "none" }, background: nav ? ColorPrimary : ColorDark }}>
                                        <MenuIcon sx={{ fontSize: "30px", color: !nav ? ColorPrimary : ColorDark }} />
                                    </BarStyles>
                                    <Stack direction={'row'} gap={'20px'} sx={{ display: { xs: "none", md: "flex" } }}>
                                        <SearchIcon

                                            onClick={() => setSearch(!search)}
                                            sx={{ fontSize: "30px",cursor:"pointer"}} />
                                        <ShoppingCartIcon sx={{ fontSize: "30px" }} />
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </CustomToolBar>
                </CustomAppBar>
            </Box>
        </>
    )
}


const BarStyles = styled(Box)({
    background: ColorDark,
    color: ColorPrimary,
    padding: "5px",
    display: "flex",
    width: "30px",
    height: "30px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    cursor: "pointer",
    border: `0.5px solid ${ColorDark}`,
    transform: "translateX(-10px)",
})

const CustomText = styled(Typography)({
    textDecoration: "none",
    fontFamily: MinorFont,
    textTransform: "uppercase",
    color: ColorDark,
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline"
    },
})



const stackStyles = {

    flexDirection: {
        xs: "column",
        md: "row"
    },
    gap: { xs: "40px", md: "40px" },
    position: {
        xs: "absolute",
        md: "static",
    },
    background: ColorPrimary,
    top: "80px",
    padding: "10px",
    left: "0",
    width: "100%",

}
const CustomAppBar = styled(AppBar)({
    background: ColorPrimary,
    boxShadow: "0 0 0 0",
})
const CustomToolBar = styled(Toolbar)({
    maxWidth: "1400px",
    display: "flex",
    margin: "0 auto",
    width: "100%",
    justifyContent: "space-between"
})

export default Navigation