import { Box, Stack, Typography } from "@mui/material"
import { ColorDark, MainButtonOutline, MainFontLight, MinorFont } from "../styles/styles"

const EachProd = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "600px",
                    borderRadius: "5px",
                    outline: `1px solid rgba(1, 1, 1, .1)`,
                    "&:hover": {
                        outline: `1px solid ${ColorDark}`,
                        cursor: "pointer"
                    }
                }}
            >
                <Stack
                    height={'100%'}
                    direction={'column'}
                    alignItems={'center'}
                    gap={'20px'}
                    justifyContent={'center'}>
                    <Typography
                        fontFamily={MinorFont}
                        variant="h2"
                    >FRAPPE</Typography>
                    <Typography
                        fontWeight={'bold'}
                        fontFamily={MainFontLight}
                    >$ 57.54 USD</Typography>
                    <Box mt={1}>
                        <img src="https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf646a788f7a5e1603fc_1.png" />
                    </Box>
                    <MainButtonOutline>Add to Cart</MainButtonOutline>
                </Stack>
            </Box>
        </>
    )
}

export default EachProd