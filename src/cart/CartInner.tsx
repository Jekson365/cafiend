import { Divider, Stack, Typography } from "@mui/material"
import { ColorDark, MinorFont } from "../styles/styles"
import CloseIcon from '@mui/icons-material/Close';
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import { Product } from "../data/Products";
import { MyContext } from "../App";


const CartInner = () => {

    const [cartItems] = useState(JSON.parse(localStorage.getItem("data") || '[]') || {})
    const { setOpen } = useContext<any>(MyContext)

    return (
        <>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                p={3}
                alignItems={'center'}
            >
                <Typography
                    variant="h4"
                    color={ColorDark}
                    fontFamily={MinorFont}
                    textTransform={"uppercase"}
                >Your Cart</Typography>
                <CloseIcon
                    onClick={() => setOpen(false)}
                    sx={{ fontSize: "30px" }} />
            </Stack>
            <Divider />
            {cartItems.map((cartData: Product) => {
                return (
                    <>
                        <CartItem cartData={cartData} />
                    </>
                )
            })}
        </>
    )
}

export default CartInner