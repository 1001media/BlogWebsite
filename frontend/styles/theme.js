import { createTheme } from "@material-ui/core";

const darkBlue = "#180C45"
const orange = "#DF5440"
const fadeOrange = "#FCF1EF"

const theme = createTheme({
    palette: {
        primary : {
            main: darkBlue
        },
        secondary: {
            main: orange,
            dark : fadeOrange
        }
    },
    typography: {
        h1: {
            color :"white",
            fontSize : "3rem"
        },
        h2: {
            color: "black",
            fontSize : "1rem"
        }
    }
})


export default theme