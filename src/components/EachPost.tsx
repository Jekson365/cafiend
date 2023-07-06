import { Box, CardMedia, Stack, Typography } from "@mui/material"
import { ColorPrimary, MainFontLight, MinorFont } from "../styles/styles"
import { hv } from "../home/Posts"

export type Post = {
    title: String,
    img: String,
    date: String,
    id: Number
}

const EachPost = ({ post }: { post: Post }) => {
    return (
        <>
            <Box sx={{ maxWidth: { xs: "90vw", md: "50vw" }, height: { xs: "92vw", md: "32vw" }, marginTop: { xs: "150px", md: "0" } }}>
                <Box
                borderRadius={"5px"}
                    overflow={'hidden'}
                >
                    <CardMedia
                        component={'img'}
                        width={'100%'}
                        height={'100%'}
                        src={post.img.toString()}
                        sx={hv}
                    />
                </Box>
                <Stack direction={'column'} alignItems={'flex-start'} mt={3}>
                    <Typography color={ColorPrimary} fontSize={'15px'} fontFamily={MainFontLight} fontWeight={'bold'}>{post.date}</Typography>
                    <Typography color={ColorPrimary} fontSize={'28px'} fontFamily={MinorFont} fontWeight={'bold'}>{post.title}</Typography>
                </Stack>
            </Box>
        </>
    )
}

export default EachPost