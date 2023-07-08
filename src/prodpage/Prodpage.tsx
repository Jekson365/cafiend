import { Box, Button, CardMedia, Container, Grid, List, ListItem, Stack, Typography } from "@mui/material"
import Banner from "../components/Banner"
import Instposts from "../home/Instposts"
import { ColorDark, ColorPrimary, MainButtonOutline, MainFontLight, MinorFont } from "../styles/styles"
import { CustomInputFiled } from "../components/Search"
import { Product, Products } from "../data/Products"
import { useEffect, useState } from "react"

const Prodpage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const [cart, setCart] = useState<any>(JSON.parse(localStorage.getItem("data") || "[]"))

    const _id = window.location.href.split("/")[4]

    const [currentProd] = useState<any>(Products.filter((e) => e.id == Number(_id))[0])

    const { title, price, images } = currentProd


    // const [quantity, setCount] = useState<number>(1)
    const [prodCount, setProdCount] = useState<number>(1)
    const addToCart = (product: Product) => {
        const existingItem = cart.find((item: any) => item.id === product.id);

        if (existingItem) {
            setCart((prevCart: any) =>
                prevCart.map((item: any) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + Number(prodCount) } : item
                )
            );
        } else {
            setCart((prevCart: any) => [...prevCart, { ...product, quantity: prodCount }]);
        }
        location.reload()
    };
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(cart))
    }, [cart])


    const [tab, setTab] = useState<Number>(1)



    return (
        <>
            <Banner title={'SHOP DETAILS'} />
            <Container
                maxWidth={false}
                sx={{ background: ColorPrimary, paddingTop: "100px" }}
            >
                <Box
                    sx={{ maxWidth: "1400px", margin: "0 auto" }}
                >
                    <Grid container columns={12}>
                        <Grid item xs={12} md={6}>
                            <Box

                            >
                                <Stack direction={'column'} alignItems={'center'} gap={'40px'}>
                                    {images.map((i: String) => {
                                        return (
                                            <>
                                                <CardMedia component={'img'} src={i.toString()} />
                                            </>
                                        )
                                    })}
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{ padding: "20px", position: "sticky", top: "100px" }}
                            >
                                <Stack direction={'column'} alignItems={'flex-start'} gap={'30px'} sx={{ paddingLeft: { xs: "0", md: "20px" } }}>
                                    <Typography
                                        color={ColorDark}
                                        fontFamily={MinorFont}
                                        variant="h2"
                                        sx={{ textTransform: "upperCase" }}
                                    >
                                        {title}</Typography>
                                    <Typography
                                        fontSize={'19px'}
                                        fontWeight={'bold'}
                                        color={ColorDark}
                                        fontFamily={MainFontLight}
                                    >$ {price} USD
                                    </Typography>
                                    <Typography
                                        color={ColorDark}
                                        fontSize={'18px'}
                                        fontWeight={'bold'}
                                        fontFamily={MainFontLight}
                                    >
                                        Coffee is a popular beverage enjoyed by millions of people around the world.
                                    </Typography>

                                    {/* quantity */}
                                    <Box
                                        sx={{ width: "100%", border: `1px solid ${ColorDark}`, borderRadius: "4px" }}
                                    >
                                        <Stack
                                            direction={'row'}
                                            p={2}
                                            justifyContent={"space-between"}
                                            alignItems={'center'}>
                                            <Box
                                                display={'flex'}
                                                alignItems={'center'}
                                                gap={'10px'}
                                                fontFamily={MainFontLight}
                                                fontWeight={'bold'}
                                            >
                                                Quantity
                                                <CustomInputFiled
                                                    sx={{ width: "70px", height: "45px", fontWeight: "bold" }}
                                                    placeholder="1" type="number"
                                                    onChange={(e: any) => setProdCount(e.currentTarget.value)}
                                                />
                                            </Box>
                                            <Box>
                                                <MainButtonOutline
                                                    sx={{ height: "45px", width: "100%", fontSize: { xs: "14px", md: "19px" } }}
                                                    onClick={() => addToCart(currentProd)}
                                                >ADD TO CART</MainButtonOutline>
                                            </Box>
                                        </Stack>
                                        {/* quantity */}
                                    </Box>
                                    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }} gap={'20px'}>
                                        <Button
                                            sx={{
                                                background: tab == 1 ? ColorDark : ColorPrimary,
                                                color: tab == 1 ? ColorPrimary : ColorDark,
                                                borderRadius: "5px",
                                                textTransform: "Capitalize",
                                                padding: "10px 35px",
                                                width: { xs: "100%", md: "auto" }
                                            }}
                                            onClick={() => setTab(1)}
                                        >
                                            <Typography fontFamily={MainFontLight} fontWeight={'bold'} fontSize={'19px'}>Info</Typography>
                                        </Button>
                                        <Button
                                            sx={{
                                                background: tab == 2 ? ColorDark : ColorPrimary,
                                                color: tab == 2 ? ColorPrimary : ColorDark,
                                                borderRadius: "5px",
                                                textTransform: "Capitalize",
                                                padding: "10px 35px",
                                                border: `1px solid ${ColorDark}`,
                                                width: { xs: "100%", md: "auto" }
                                            }}
                                            onClick={() => setTab(2)}
                                        ><Typography fontFamily={MainFontLight} fontWeight={'bold'} fontSize={'19px'}>Description</Typography></Button>
                                    </Stack>
                                    <Box sx={{ display: tab == 1 ? 'block' : "none" }}>
                                        <List
                                            sx={{
                                                fontFamily: MainFontLight,
                                                fontWeight: "bold",
                                                listStyleType: "disc",
                                                marginLeft: "20px",
                                            }}>
                                            <ListItem sx={{ display: "list-item", fontSize: { xs: "18px", md: "18px" } }}>Would you like cream and sugar with your coffee?</ListItem>
                                            <ListItem sx={{ display: "list-item", fontSize: { xs: "18px", md: "18px" } }}>Let's grab a coffee and catch up.</ListItem>
                                            <ListItem sx={{ display: "list-item", fontSize: { xs: "18px", md: "18px" } }}>Do you prefer light or dark roast coffee?</ListItem>
                                            <ListItem sx={{ display: "list-item", fontSize: { xs: "18px", md: "18px" } }}>I'm not a morning person, but coffee helps.</ListItem>
                                            <ListItem sx={{ display: "list-item", fontSize: { xs: "18px", md: "18px" } }}>I enjoy trying different coffee blends and flavors.</ListItem>
                                            <ListItem sx={{ display: "list-item", fontSize: { xs: "18px", md: "18px" } }}>I can't start my day without a cup of coffee.</ListItem>
                                        </List>
                                    </Box>
                                    <Box sx={{ display: tab == 2 ? 'block' : "none" }}>
                                        <Typography
                                            color={ColorDark}
                                            fontFamily={MainFontLight}
                                            fontWeight={'bold'}
                                        >
                                            Coffee is known for its unique aroma and taste, which can range from bitter to sweet depending on the type of coffee bean and the brewing method used.

                                            It is made from the roasted seeds of the Coffee plant and can be served hot or cold in a variety.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
            <Instposts />
        </>
    )
}

export default Prodpage