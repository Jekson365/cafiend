import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import { ColorDark, MainFontLight } from "../styles/styles"
import { Product } from "../data/Products"
import { useState } from "react"

const CartItem = ({ cartData }: { cartData: Product }) => {
    const [cartItems] = useState(JSON.parse(localStorage.getItem("data") || '[]') || {})
    const handleRemove = (id: Number) => {
        localStorage.setItem('data', JSON.stringify(cartItems.filter((ec: Product) => ec.id !== id)))
        location.reload()
    }
    return (
        <>
            <Grid container columns={12}
                display={'flex'}
                alignItems={'flex-start'}
                p={2}
                justifyContent={'space-between'}
            >
                <Grid item xs={6}
                >
                    <Box
                        display={'flex'}
                        gap={'5px'}
                        flexDirection={"row"}
                        alignItems={'center'}
                    >
                        <img
                            width={'60px'}
                            src={cartData.img.toString()}
                        />
                        <Stack direction={'column'} alignItems={'flex-start'} gap={'5px'}>
                            <Typography
                                color={ColorDark}
                                fontSize={'16px'}
                                fontWeight={700}
                                fontFamily={MainFontLight}
                            >{cartData.title}</Typography>
                            <Typography
                                color={ColorDark}
                                fontWeight={'bold'}
                                fontFamily={MainFontLight}
                            >$ {cartData.price} USD</Typography>
                            <Typography
                                color={ColorDark}
                                fontWeight={'bold'}
                                fontFamily={MainFontLight}
                                sx={{ cursor: "pointer" }}
                                onClick={() => handleRemove(cartData.id)}
                            >Remove</Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={6}
                    display={'flex'}
                    gap={'5px'}
                    flexDirection={"row"}
                    justifyContent={'flex-end'}
                >
                    <Box
                        border={`1px solid ${ColorDark}`}
                        width={'50px'}
                        height={'40px'}
                        borderRadius={"5px"}
                        display={'flex'}
                        pl={1}
                        justifyContent={'start'}
                        alignItems={'center'}
                    >
                        {Number(cartData.quantity)}
                    </Box>
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}

export default CartItem