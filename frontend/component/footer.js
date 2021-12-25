import { Grid , Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    mainContainer : {
        backgroundColor : "black",
        height: "10rem"
    },
    nameText : {
        color: "#fff",
        fontSize : "1.3rem"
    },
    linkText: {
        color: "#fff",
        fontSize : "1.1rem"
    }
})

const Footer = () => {
    const classes = useStyles()

    return (
        <Grid container classes={{root : classes.mainContainer}} alignItems="center">
            <Grid item container lg={5} justifyContent="center">
                <Grid item>
                    <Typography classes={{root: classes.nameText}}>
                       © 2021 Hari Gopinath
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container lg={7} justifyContent="space-around" >
                <Grid item>
                    <Typography classes={{root: classes.linkText}}>
                        Privacy Policy
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography classes={{root: classes.linkText}}>
                        Blog
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography classes={{root: classes.linkText}}>
                        Contact
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
