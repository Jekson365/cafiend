import { Box, Container, Grid, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainButtonPrimary, MinorFont } from "../styles/styles"
import { CustomInputFiled } from "../components/Search"

const Form = () => {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{ background: ColorPrimary, padding: "100px 20px" }}
            >
                <Typography
                    textAlign={'center'}
                    variant="h2"
                    fontFamily={MinorFont}
                >LET`S TALK :)
                </Typography>
                <Box
                    sx={{ maxWidth: "900px", margin: "0 auto" }}
                >
                    <Grid container columns={12} columnSpacing={2} mt={4}>
                        <Grid item xs={12} md={6}>
                            <CustomInputFiled placeholder="naem naem" sx={{ marginTop: "20px" }} />
                            <CustomInputFiled placeholder="naem naem" sx={{ marginTop: "20px" }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomInputFiled placeholder="naem naem" sx={{ marginTop: "20px" }} />
                            <CustomInputFiled placeholder="naem naem" sx={{ marginTop: "20px" }} />
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: "20px" }}>
                        <textarea placeholder="Enter text..."
                            className="teextar"
                            style={{ border: `1px solid ${ColorDark}` }}
                        ></textarea>
                    </Box>
                    <Box
                        mt={3}
                        sx={{ textAlign: "center" }}
                    >
                        <MainButtonPrimary
                            sx={{ background: ColorDark, color: ColorPrimary, borderRadius: "7px", "&:hover": { outline: `1px solid ${ColorDark}`, color: ColorDark } }}
                        >GET IN TOUCH</MainButtonPrimary>
                    </Box>
                </Box>
            </Container>
        </>
    )
}



export default Form