import { Box, Fade, InputBase, Stack, styled } from "@mui/material"
import { ColorDark, ColorPrimary, MainFontLight } from "../styles/styles"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ search, setSearch }: { search: boolean, setSearch: (search: boolean) => void }) => {
    return (
        <>
                <Fade in={search}>
                    <Box
                        sx={{ ...searchStyles,position:"fixed",top:"0",width:"100%" }}
                    >
                        <Box sx={{ width: "100%", maxWidth: "1400px" }}>
                            <Stack direction={'row'} gap={"20px"} width={"100%"} alignItems={"center"}>
                                <SearchIcon sx={{ fontSize: "35px" }} />
                                <CustomInputFiled placeholder="Search..." />
                                <CloseIcon sx={{ fontSize: "35px", cursor: "pointer" }} onClick={() => setSearch(!search)} />
                            </Stack>
                        </Box>
                    </Box>
                </Fade>
        </>
    )
}


export const CustomInputFiled = styled(InputBase)({
    width: "100%",
    border: `0.5px solid ${ColorDark}`,
    borderRadius: "5px",
    height: "60px",
    color: 'black',
    padding: "0 20px",
    fontFamily: MainFontLight,
})

const searchStyles = {
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    height: "180px",
    background: ColorPrimary,
    zIndex: "100000000",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
}

export default Search