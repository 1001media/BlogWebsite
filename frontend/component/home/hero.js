import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core/"
import { makeStyles } from "@material-ui/styles"

import theme from "../../styles/theme"


const useStyles = makeStyles({
    mainContainer :{
        width: "100%",
        height : "25rem",
        padding:"10rem"
    },
    secondContainer: {
        backgroundColor: theme.palette.secondary.dark,
        [theme.breakpoints.down("lg")]: {
            paddingLeft : "5rem"
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft : "0"
        }
    },
    headlineText: {
        fontWeight: "bold",
        fontSize: "3rem"
    },
    subHeadlineText : {
        fontWeight: 500,
        fontSize : "1.8rem"
    },
    text : {
        fontSize: "1.4rem",
        fontWeight :400,
        [theme.breakpoints.down("sm")] :{
            padding: ".6rem"
        }
    },
    btn : {
        borderRadius : 10,
    },
    btnText: {
        textTransform: "none",
        fontSize: "1rem",
        padding : ".5rem 1rem",
    },
    gap : {
        paddingTop : "1rem"
    },

    img: {
        width: "100%",
        height : "100%",
        backgroundPosition: "center",
        backgroundSize : "contain",
        backgroundrepeat : "no-repeat",
    },
    imageContainer: {
        height : "100%",
        width : "100%",
    }
})

const Hero = () => {
    const classes = useStyles()

    const matchesSM = useMediaQuery(th => theme.breakpoints.down("sm"))

    return (
        <Grid container classes={{root: classes.mainContainer}}>
            <Grid 
            item 
            container 
            lg={8} 
            xs={12}
            direction="column" 
            classes={{root: classes.secondContainer}}
            justifyContent="center"
            alignItems={ matchesSM ? "center" : undefined}
            >
                <Grid item>
                    <Typography variant="h2" classes={{root: classes.headlineText}}>
                      Master Plan
                    </Typography>
                </Grid>

                <Grid item classes={{root: classes.gap}}>
                    <Typography variant="h2" classes={{root: classes.subHeadlineText}}>
                       Welcome to My Blog
                    </Typography>
                </Grid>

                <Grid item classes={{root: classes.gap}}>
                    <Typography variant="h2" classes={{root: classes.text}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent 
                        libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum 
                        imperdiet. Duis sagittis ipsum. 
                    </Typography>
                </Grid>

                <Grid item classes={{root: classes.gap}}>
                    <Button variant="contained" color="primary" classes={{root: classes.btn}}>
                        <Typography variant="h1" classes={{root: classes.btnText}}>
                            Learn More
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            { matchesSM ? undefined : (
            <Grid item container lg={4} classes={{root: classes.imageContainer}}>
                <img src="/heroImg.jpg" className={classes.img}/>
            </Grid>
            )}
        </Grid>
    )
}

export default Hero
