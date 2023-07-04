import { Button, styled } from "@mui/material";

export const ColorPrimary = '#fff2e6';
export const ColorDark = '#010101';

export const MainFontLight = "'Inconsolata', monospace";
export const MinorFont = "'Oswald', sans-serif";


export const MainButtonPrimary = styled(Button)({
    background: "transparent",
    width:"235px",
    fontFamily:MainFontLight,
    fontWeight:"bold",
    fontSize:"17px",
    color: ColorDark,
    border: `1px solid ${ColorPrimary}`,
    padding: "15px 30px",
    "&:hover": {
        background: ColorPrimary
    }
})

export const MainButtonOutline = styled(Button)({
    background: "transparent",
    width:"235px",
    fontFamily:MainFontLight,
    fontWeight:"bold",
    fontSize:"17px",
    color: ColorDark,
    border: `1px solid ${ColorDark}`,
    padding: "15px 30px",
    "&:hover": {
        background: ColorDark,
        color: ColorPrimary
    }
})

export const MainButtonWhite = styled(Button)({
    background: ColorPrimary,
    width:"235px",
    fontFamily:MainFontLight,
    fontWeight:"bold",
    fontSize:"17px",
    color: ColorDark,
    border: `1px solid ${ColorPrimary}`,
    padding: "15px 30px",
    "&:hover": {
        background: 'transparent',
        color: ColorPrimary,
        border: `1px solid ${ColorPrimary}`
    }
})

