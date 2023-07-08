import { Box, Stack, Typography } from "@mui/material"
import { ColorDark, MinorFont } from "../styles/styles"
import { Product } from "../data/Products"
import { Link } from "react-router-dom"

const Eachitem = ({ prod }: { prod: Product }) => {

    return (
        <>
            <Link to={`/product/${prod.id}`}>
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
                            textTransform={'uppercase'}
                            variant="h2"
                        >{prod.title}</Typography>
                        <Box mt={1}>
                            <img src={prod.img.toString()} />
                        </Box>
                    </Stack>
                </Box>
            </Link>
        </>
    )
}

export default Eachitem