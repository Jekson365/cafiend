import { Box, Container, Grid, List, ListItem, Stack, Typography } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"

const Benefits = () => {
    const arr = [
        {
            title: "Organic Coffe",
            lists: ['Pure Flavor', "Natural Taste", 'Chemical-free Beans', 'Sustainable farming'],
        },
        {
            title: "Frech Roasted",
            lists: ["Full-bodied flavor", 'Aromatic beans', 'High-quality roast', "Fresh aroma"]
        },
        {
            title: "Original Taste",
            lists: ['Classic flavor', "Authentic taste", 'Original recipe', "Traditional blend"]
        },
    ]
    return (
        <>
            <Container
                sx={{ background: ColorDark, minHeight: "100vh", padding: { xs: "100px 0px !important", md: "100px 0px !important" }, display: "flex", justifyContent: "center" }}
                maxWidth={false}
            >
                <Box width={'80%'}>
                    <Grid container columns={12} spacing={10}>
                        <Grid item xs={12} lg={7}>
                            <Stack
                                sx={{ position: "sticky", top: "100px" }}
                            >
                                <Typography
                                    color={ColorPrimary}
                                    fontFamily={MinorFont}
                                    fontSize={'60px'}
                                >WHAT MAKES OUR COFFEE BEST?</Typography>
                                <Typography
                                    color={ColorPrimary}
                                    fontFamily={MainFontLight}
                                    fontWeight={'bold'}
                                    fontSize={'17px'}
                                >
                                    Coffee can be served hot or cold and can be prepared in a
                                    variety of ways, such as drip brewing, French press,
                                    espresso, and more. The flavor and strength of the
                                    coffee depend on the type of beans used, the roasting
                                    process, and the brewing method.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={5} spacing={3}>
                            <Stack gap={'40px'}>

                                {arr.map((each: any) => {
                                    return (
                                        <>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "center",
                                                    maxWidth: "400px",
                                                    height: "300px",
                                                    padding: "0 50px",
                                                    border: `1px solid rgba(255, 255, 255, .2)`
                                                }}
                                            >
                                                <Stack direction={'column'} alignItems={'flex-start'}>
                                                    <Typography
                                                        fontSize={'35px'}
                                                        color={ColorPrimary}
                                                        textTransform={'uppercase'}
                                                        fontFamily={MinorFont}>{each.title}</Typography>
                                                    <List

                                                        sx={{
                                                            color: ColorPrimary,
                                                            fontFamily: MainFontLight,
                                                            fontWeight: "bold",
                                                            listStyleType: "disc",
                                                            marginLeft: "20px"
                                                        }}>
                                                        {each.lists.map((item: String) => {
                                                            return (
                                                                <>
                                                                    <ListItem sx={{ display: "list-item",fontSize:{xs:"13px",md:"18px"} }}>{item}</ListItem>

                                                                </>
                                                            )
                                                        })}
                                                    </List>
                                                </Stack>
                                            </Box>
                                        </>
                                    )
                                })}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Benefits