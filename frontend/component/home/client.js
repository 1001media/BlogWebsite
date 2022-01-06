import { Grid, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"

import theme from "../../styles/theme"

const useStyles = makeStyles({
    mainContainer : {
        height : "auto",
        backgroundColor :"#D8E4F0"
    },
    headingContainer : {
        paddingTop: "6rem"
    },
    headingText : {
        fontSize : "2.5rem",
        fontWeight: 500
    },
    secondContainer : {
        paddingTop: "2rem",
        paddingBottom: "3rem"
    },
    logoContainer : {
        backgroundColor : theme.palette.secondary.dark,
        width: "18rem",
        height: "7rem",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        [theme.breakpoints.down("md")] : {
            marginTop: "1rem"
        }
    },
    logoText : {

        fontSize : "1.5rem",
        color: theme.palette.primary.main,
        fontWeight: 600,
    }
})

const ClientSection = () => {
    const classes = useStyles()

    return (
        <Grid container classes={{root: classes.mainContainer}} direction="column">
            <Grid item container justify="center">
                <Grid item classes={{root: classes.headingContainer}}>
                   <Typography variant="h2" classes={{root: classes.headingText}}>
                     Certifications
                   </Typography>
                </Grid>
            </Grid>
            <Grid item container justify="space-around" classes={{root: classes.secondContainer}}>
                <Grid item classes={{root: classes.logoContainer}}>
                    <Typography align="center" classes={{root: classes.logoText}}>
                                <Grid item container lg={4} classes={{root: classes.imageContainer}}>
                <img src="/a1.jpg" className={classes.img}/>
            </Grid>
                    </Typography>
                </Grid>
                <Grid item classes={{root: classes.logoContainer}}>
                    <Typography align="center" classes={{root: classes.logoText}}>
                                 <Grid item container lg={4} classes={{root: classes.imageContainer}}>
                <img src="/a2.jpg" className={classes.img}/>
            </Grid>
                    </Typography>
                </Grid>
                <Grid item classes={{root: classes.logoContainer}}>
                    <Typography align="center" classes={{root: classes.logoText}}>
                                 <Grid item container lg={4} classes={{root: classes.imageContainer}}>
                <img src="/a3.jpg" className={classes.img}/>
            </Grid>
                    </Typography>
                </Grid>
                <Grid item classes={{root: classes.logoContainer}}>
                    <Typography align="center" classes={{root: classes.logoText}}>
                          <Grid item container lg={4} classes={{root: classes.imageContainer}}>
                <img src="/a4.jpg" className={classes.img}/>
            </Grid>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ClientSection
