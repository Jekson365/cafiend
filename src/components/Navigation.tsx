import { AppBar, Box, Stack, Toolbar, Typography, styled, Grid, Slide } from '@mui/material'
import { ColorDark, ColorPrimary, MinorFont } from '../styles/styles'
import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Search from './Search';




const Navigation = () => {
    const [nav, setNav] = useState<boolean>(window.innerWidth > 900 ? true : false)
    const [search, setSearch] = useState<boolean>(false)

    return (
        <>
            <Search search={search} setSearch={setSearch} />
            <Box
                sx={{ zIndex: "99999999", position: "sticky", top: "0", left: "0" }}
            >
                <CustomAppBar
                    sx={{ marginTop: { xs: "0", md: "0px" }, zIndex: "1000" }}

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
                                        sx={{ ...stackStyles, zIndex: "10000", width: "100%" }}
                                    >
                                        <NavLink to={'/'}>
                                            <CustomText>
                                                Home
                                            </CustomText>
                                        </NavLink>
                                        <CustomText
                                            className='pages'
                                            sx={{ "position": "relative" }}
                                        >
                                            pages
                                            <Box
                                                className='nav-box'
                                                sx={{ position: "absolute", top: "20px", left: "-20px", zIndex: "100000", background: ColorPrimary, width: { xs: "100%", md: "100px" }, padding: "20px" }}
                                            >
                                                <Stack
                                                    sx={{ direction: "column", alignItems: "flex-start", zIndex: "10000", width: "100%", gap: "20px" }}
                                                >
                                                    <NavLink to={'/about'}>
                                                        <CustomText>
                                                            About us
                                                        </CustomText>
                                                    </NavLink>
                                                    <NavLink to={"/category"}>
                                                        <CustomText>
                                                            Category
                                                        </CustomText>
                                                    </NavLink>
                                                    <NavLink to={'/contact'}>
                                                        <CustomText>
                                                            Contact
                                                        </CustomText>
                                                    </NavLink>
                                                </Stack>
                                            </Box>
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
                                    <Link to='/'>
                                        <img
                                            style={{ "width": "100%", height: "100%", objectFit: "cover" }}
                                            src='https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/646b5185a94bf985becf351a_Coffe_logo%20(1).svg' />
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={8} md={4}
                                sx={{ justifyContent: { xs: "flex-end", md: "flex-end", display: { xs: "flex", md: "block" } } }}
                            >
                                <Stack
                                    sx={{ marginRight: { xs: "20px", md: "40px" } }}
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
                                            sx={{ fontSize: "30px", cursor: "pointer" }} />
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
    boxShadow: "0 0 30px 0.1px rgba(0,0,0,0.3)",
})

const CustomToolBar = styled(Toolbar)({
    display: "flex",
    margin: "0 auto",
    maxWidth: "1400px",
    width: "100%",
    justifyContent: "space-between"
})

export default Navigation