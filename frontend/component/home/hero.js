import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core/"
import { makeStyles } from "@material-ui/styles"

import theme from "../../styles/theme"


const useStyles = makeStyles({
    mainContainer :{
        width: "100%",
        height : "557px",
        background: "#f9f1ef"
        
    },
    secondContainer: {
        backgroundColor: theme.palette.secondary.dark,
        [theme.breakpoints.down("xl")]: {
            paddingLeft : "5rem"
        },
        [theme.breakpoints.down("lg")]: {
            paddingLeft : "5rem"
        },
        [theme.breakpoints.down("md")]: {
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

    const matchesMD = useMediaQuery(th => theme.breakpoints.down("md"))

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
            alignItems={ matchesMD ? "center" : undefined}
            >
                <Grid item>
                    <Typography variant="h2" classes={{root: classes.headlineText}}>
                      Hari Gopinath
                    </Typography>
                </Grid>

                <Grid item classes={{root: classes.gap}}>
                    <Typography variant="h2" classes={{root: classes.subHeadlineText}}>
                    Digital Marketing Specialist

                    </Typography>
                </Grid>

                <Grid item classes={{root: classes.gap}}>
                    <Typography variant="h2" classes={{root: classes.text}}>
               As a Digital Marketing Specialist with more than 12+ years’ experience in visualization, design and digital marketing, I have delivered traffic, 
                   leads and sales using the latest advertising and marketing strategies in the industry.
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
            { matchesMD ? undefined : (
            <Grid item container lg={4} classes={{root: classes.imageContainer}}>
                <img src="/hero-image.png" className={classes.img}/>
            </Grid>
            )}
        </Grid>
    )
}

export default Hero
