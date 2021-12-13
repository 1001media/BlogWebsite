import { Grid, Typography, Avatar } from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"

import theme from "../../styles/theme"

const useStyles = makeStyles({
    mainContainer : {
        marginTop: "5rem",
        marginBottom: "5rem",
    },
    sectionHeadingText: {
        fontSize: "2.5rem",
        fontWeight: 500
    },
    subTitleText: {
        fontSize: "1.5rem",
    },
    gap: {
        paddingTop: ".5rem"
    },
    cardContainer : {
        marginTop: "3rem",
        width: "25rem",
        [theme.breakpoints.down("sm")] :{
            widht: "100%"
        }
    },
    gap2: {
        paddingTop: "2rem"
    },
    avatar : {
        backgroundColor :"black",
        width: "5rem",
        height: "5rem"
    },
    cardText :{
        fontSize: "1.1rem",
        lineHeight: "2rem"
    }
})

const Section = () => {
    const classes = useStyles()

    return (
        <Grid container classes={{root: classes.mainContainer}}>
            <Grid item container justify="center" alignItems="center" direction="column">
                <Grid item>
                    <Typography variant="h2" classes={{root: classes.sectionHeadingText}}>
                        Section Heading
                    </Typography>
                </Grid>
                <Grid item classes={{root : classes.gap}}>
                    <Typography variant="h2" align="center" classes={{root: classes.subTitleText}}>
                        Sub Title
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container justifyContent="space-around" alignItems="center">
                <Grid item classes={{root: classes.cardContainer}}>
                   <Grid 
                   item 
                   container 
                   direction="column" 
                   justify="center" 
                   alignItems="center" 
                   >
                    <Grid item>
                        <Avatar
                        classes={{root: classes.avatar}}
                        >
                            H
                        </Avatar>
                    </Grid>
                    <Grid item classes={{root: classes.gap2}}>
                        <Typography align="center" variant="h2" classes={{root: classes.cardText}}>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Integer nec odio. Praesent 
                            libero. 
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>   

                <Grid item classes={{root: classes.cardContainer}}>
                   <Grid 
                   item 
                   container 
                   direction="column" 
                   justify="center" 
                   alignItems="center" 
                   >
                    <Grid item>
                        <Avatar
                        classes={{root: classes.avatar}}
                        >
                            H
                        </Avatar>
                    </Grid>
                    <Grid item classes={{root: classes.gap2}}>
                        <Typography align="center" variant="h2" classes={{root: classes.cardText}}>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Integer nec odio. Praesent 
                            libero. 
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>   

                <Grid item classes={{root: classes.cardContainer}}>
                   <Grid 
                   item 
                   container 
                   direction="column" 
                   justify="center" 
                   alignItems="center" 
                   >
                    <Grid item>
                        <Avatar
                        classes={{root: classes.avatar}}
                        >
                            H
                        </Avatar>
                    </Grid>
                    <Grid item classes={{root: classes.gap2}}>
                        <Typography align="center" variant="h2" classes={{root: classes.cardText}}>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Integer nec odio. Praesent 
                            libero. 
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>   
                             
            </Grid>
        </Grid>
    )
}

export default Section