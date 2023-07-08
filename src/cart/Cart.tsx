import { Backdrop, Box, Slide } from "@mui/material"
import { useContext } from "react"
import { ColorPrimary } from "../styles/styles"
import { MyContext } from "../App"
import CartInner from "./CartInner"

const Cart = () => {

    const { open, setOpen } = useContext<any>(MyContext)


    return (
        <>
            <Backdrop
                open={open}
                onClick={() => setOpen(false)}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1000000000 }} />
            <Slide in={open} direction="left" appear={true}

                timeout={500}
                easing={{
                    enter: "cubic-bezier(0.990, -0.020, 0.070, 1.005)",
                    exit: "cubic-bezier(0.990, -0.020, 0.070, 1.005)"
                }}>
                <Box
                    // className={`${open ? "active-cart" : 'de-active-cart'}`}
                    position={"fixed"}
                    top={"0"}
                    right={'0'}
                    width={'100%'}
                    maxWidth={'470px'}
                    height={'100vh'}
                    bgcolor={ColorPrimary}
                    zIndex={'9999999999'}
                >
                    <CartInner />
                </Box >
            </Slide >
        </>
    )
}

export default Cart