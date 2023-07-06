import { Box, CardMedia, Typography } from "@mui/material"
import { ColorPrimary, MinorFont } from "../styles/styles"

const Banner = ({ title }: { title: String }) => {
    return (
        <>
            <Box
                height={'450px'}
                overflow={'hidden'}
                position={'relative'}
            >
                <Box
                    position={'absolute'}
                    top={'50%'}
                    sx={{ transform: "translate(-50%,0)" }}
                    left={'50%'}
                >
                    <Typography
                        fontFamily={MinorFont}
                        color={ColorPrimary}
                        variant="h2">{title}</Typography>
                </Box>
                <CardMedia
                    width={"100%"}
                    height={'100%'}
                    sx={{ "backgroundSize": "cover" }}
                    component={'img'}
                    src='https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440dbb1e024b14d1a696c96_breadcrumb.webp'
                />
            </Box>

        </>
    )
}

export default Banner