import {extendTheme} from "@chakra-ui/react";

const colorPalette = {
    brand: {
        white: "#FFFFFF",
        black: "#000000",

        purpleBlack: "#080220",

        purpleOne: "#100545",
        purpleTwo: "#181A50",
        purpleThree: "#57467B",

        foam: "#D6FCFE",

        actionBlue: "#46A4F8",
        softBlue: "#c4daee",
        
        bgLevel1Light: "#1B1B33",
        bgLevel2Light: "#41485A",
        bgLevel2Dark: "#111028",

        affirmativeGreen: "#6EA082",
        negativeRed: "#AC5960",
    }
    
}

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                color: colorPalette.brand.purpleBlack,
                lineHeight: 'tall',
                bgGradient: `linear(to-b, ${colorPalette.brand.foam} , ${colorPalette.brand.softBlue})`
            }
        },
    },
    colors: colorPalette
})
export default theme