
import { Grid, Button, Typography, useMediaQuery} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"


import clsx from "clsx"
import Link from "next/link"

import theme from "../styles/theme"


const useStyles = makeStyles({
    mainContainer : {
        height : "7rem",
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1rem",
            height : "auto"
        }
    },
    logoContainer : {
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 10,
    },
    logoText: {
        fontSize: "2rem",
        fontWeight: "bold",
        padding: ".7rem 1.5rem"
    },
    siteNameText : {
        marginLeft: "1.4rem",
        //marginTop: ".6rem",
        color: theme.palette.secondary.main,
        fontWeight : "bold",
        fontSize: "2rem"
    },
    secondContainer: {
        marginLeft: "2rem",
        [theme.breakpoints.down("sm")] : {
            marginTop: "1rem",
            marginLeft: ".4rem",
        }
    },
    linkContainer : {
        [theme.breakpoints.down("sm")]: {
            marginTop: "1.5rem",
        }
    },
    infoMainBtn: {
        borderRadius : 10,
        color: "#fff",
        padding : ".3rem .8rem",
        textTransform: "none",
        [theme.breakpoints.down("sm")]: {
            padding : ".2rem .5rem"
        }
    },
    infoMainText : {
        color: "#fff",
    },
    infoText: {
        textTransform : "none",
        "&:hover": {
            color: theme.palette.secondary.main
        }
    },
    nav: {
        display: "flex",
        alignItems: "center",
    },
    navListItem: {
        color: theme.palette.secondary.main,
        fontSize : "1rem",
        listStyle :"none",
        position: "relative",
        cursor : "pointer",
    },
    navListItemdrop : {
        position: "absolute",
        top: "1rem",
        left: "-1rem",
        boxShadow: "0 0 10px grey300",
        backgroundColor : "#CCC3C5",
        opacity: 0,
        width: "10rem",
        borderRadius: 10,
        padding : "1rem",
        display : "flex",
        flexDirection : "column",
        gap:"0.5rem",
        "&:hover" : {
            visibility: "visible",
            opacity: 1
        },
        [theme.breakpoints.down("sm")]: {
            "&:hover" : {
                visibility: "hidden",
                opacity: 0
            },
        }
    },
    item: {
        listStyle : "none",
        color: "black",
        padding: ".5rem 1rem",
        borderRadius:10,
        transition: "background-color 200ms ease-in-out",
        "&:hover": {
            color: "#fff",
            borderRadius:10,
            backgroundColor: theme.palette.secondary.main
        }
    }
})


const NavBar = () => {
    const classes = useStyles()

    const datas = [
        {name: "Home", fill: true, href:"/", dropDown: false},
        {name: "About", fill: false, href:"#", dropDown: false},
        {name: "Reviews", fill: false, href:"#", dropDown: true},
        {name: "Blog", fill: false, href: "/blogs/blog-archive"},
        {name: "Contact", fill: false, href: '#', dropDown: false}
    ]

    const matchesSM = useMediaQuery(th => theme.breakpoints.down("sm"))

    return (
        <Grid container classes={{root:classes.mainContainer}} alignItems="center">
            <Grid 
            item 
            container 
            justifyContent="flex-start" 
            lg={5} 
            alignItems="center" 
            classes={{root: classes.secondContainer}}
            >
                <Link href="/">
                <Grid item classes={{root: classes.logoContainer}}>
                    <Typography variant="h1" classes={{root: classes.logoText}}>
                           H
                    </Typography>
                </Grid>
                </Link>
                <Grid item>
                    <Typography align="center" classes={{root: classes.siteNameText}}>
                        Site Title
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container lg={6} justifyContent="space-around" classes={{root: classes.linkContainer}}>
                {datas.map((data, i) => (
                     !data.dropDown ? (
                        <Grid item key={i}>
                        <Link href={data.href}>
                        <Button 
                        variant={data.fill ? "contained" : undefined} 
                        color="secondary"
                        classes={{root: clsx({
                            [classes.infoMainBtn] :  data.fill
                        })}}
                        >
                            <Typography 
                            variant="h2" 
                            align="center"
                            classes={{root: clsx({
                                [classes.infoText] : !data.fill,
                                [classes.infoMainBtn] :  data.fill
                            })}}
                            >
                                {data.name}
                            </Typography>
                        </Button>
                        </Link>
                    </Grid>
                     ) : (
                        <Grid item classes={{root:  classes.nav}}>
                            <li className={classes.navListItem}>Review
                                <ul className={classes.navListItemdrop}>
                                    <li className={classes.item}>Certificate</li>
                                    <li className={classes.item}>Downloads</li>
                                    <li className={classes.item}>Reviews</li>
                                    <li className={classes.item}>Tools</li>
                                </ul>
                            </li>
                        </Grid>
                     )
                ))}
            </Grid>
        </Grid>
    )
}

export default NavBar