import { Box, CardMedia, Grid } from "@mui/material"


const Instposts = () => {
    const arr = [
        "https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440dbe394b643939a28997d_6-p-500.webp",
        "https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440dbe387dd93ae4f41e4c9_5-p-500.webp",
        "https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440dbe240b8f9fa46436b0e_4-p-500.webp",
        "https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440dbe2d53af6317ea70c4b_1-p-500.webp",
        "https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440dbe203c9015aec4e29a0_2-p-500.webp",
        "https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6440dbe271a669771836466d_3-p-500.webp"
    ]
    return (
        <>
            <Grid columns={12} container>
                {arr.map((each) => {
                    return (
                        <>
                            <Grid item xs={12} sm={4} md={2}>
                                <Box
                                >
                                    <CardMedia
                                        component={'img'}
                                        src={each}
                                    />
                                </Box>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}

export default Instposts