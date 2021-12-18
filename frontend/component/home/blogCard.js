import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import Link from "next/link"
import Image from 'next/image'
import theme from "../../styles/theme"

const useStyles = makeStyles({
    blogContainer : {
        [theme.breakpoints.down("sm")] : {
            marginLeft : (isRelatedPost) => isRelatedPost ?  0 : 0,
        },
        marginLeft : (isRelatedPost) => isRelatedPost ?  "3rem" : 0,
        backgroundColor: "#fff",
        width: "22rem",
        height: "22rem",
        borderRadius : 20,
        marginTop: "3rem",
        cursor : "pointer",
        [theme.breakpoints.down("xs")]: {
            
            height: "20rem"
        }
    },
    img:  {
        width : "100%",
        height : "12rem",
        borderStartStartRadius : 20,
        borderTopRightRadius : 20
    },
    cardHeadingText : {
        fontsize :"1rem",
        fontWeight : 600,
        paddingLeft: "1rem",
        paddingTop: ".5rem"
    },
    cardDescriptionText : {
        fontSize : ".8rem",
        paddingLeft : "1rem",
        paddingTop : ".5rem"
    },
    btnContainer : {
        display : "flex",
        justifyContent : "flex-end",
        paddingRight : "1rem",
    },
    btn : {
        borderRadius: 10,
        "&:hover" : {
            backgroundColor : theme.palette.secondary.main
        }
    },
    btnText : {
        textTransform : "none",
    },
})

const BlogCard = ({ blog, isRelatedPost, isArchive}) => {
    const classes = useStyles({ isRelatedPost })

    if(isArchive) {
        console.log(blog)
    }
    return (
        <>
                    <Grid item>
                    <Link href={`/${blog.slug}`}>
                        <Grid item container direction="column" classes={{root: classes.blogContainer}}>
                            <Grid item>
                                <img className={classes.img} src={blog?.image.url}  alt="machine" />
                            </Grid>
                            <Grid item>
                                <Typography  classes={{root: classes.cardHeadingText}}>
                                    {blog.heading}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography  classes={{root: classes.cardDescriptionText}}>
                                    {blog.subHeading}
                                </Typography>
                            </Grid>
                            <Grid item classes={{root: classes.btnContainer}}>
                                <Button classes={{root: classes.btn}}  variant="contained" color="secondary">
                                    <Typography classes={{root: classes.btnText}}>Read More</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        </Link>
                    </Grid>
        </>
    )
}


export default BlogCard