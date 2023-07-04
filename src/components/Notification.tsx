import { Box, Typography } from '@mui/material'
import { ColorDark, ColorPrimary, MainFontLight } from '../styles/styles'

const Notification = () => {
    return (
        <>
            <Box
                sx={{ display: { xs: "none", md: "flex" } }}
                bgcolor={ColorDark}
                justifyContent={"center"}
                height={'40px'}
                alignItems={"center"}
            >
                <Typography color={ColorPrimary}
                    fontWeight={700}
                    fontFamily={MainFontLight}>
                    Welcome To Early Birds we Ship Every Teusday And Thusrday Free Shipping In The Netherlande
                </Typography>
            </Box>
        </>
    )
}

export default Notification