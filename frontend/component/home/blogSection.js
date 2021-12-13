import { Grid , Typography, Button } from "@material-ui/core"

import { makeStyles } from "@material-ui/core"

import theme from "../../styles/theme"

import BlogCard from "../home/blogCard"

import Link from "next/link"

const useStyles = makeStyles({
    mainContainer : {
        backgroundColor : theme.palette.primary.main,
        height : "auto"
    },
    headingContainer: {
        paddingTop : "3rem"
    },
    headingText : {
        color : "#fff",
        fontSize : "2.5rem"
    },
    descriptionText : {
        color : "#fff",
        fontSize : "1.5rem"
    },

    readMorebtnText : {
        color: "#fff",
        textTransform: "none",
        fontSize : "1.3rem",
        textDecoration: "underline"
    },
    readmoreBtnContainer : {
        marginTop : "4rem",
        marginBottom: "2rem"
    }
})


const BlogSection = ({ blogData }) => {

    const classes = useStyles()


    return (
        <Grid container classes={{root: classes.mainContainer}}>
            <Grid item container direction="column" alignItems="center" classes={{root: classes.headingContainer}}>
                <Grid item>
                    <Typography classes={{root: classes.headingText}}>
             Welcome to My Blog
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography classes={{root: classes.descriptionText}}>
                        Blog Category Description
                    </Typography>
                </Grid>
            </Grid>
                <Grid item container justifyContent="space-around">
                {blogData?.map((blog, i) => (
                    <BlogCard isRelatedPost={false} key={i} blog={blog}/>
                ))}
                </Grid>
            <Grid item container justifyContent="center" classes={{root:classes.readmoreBtnContainer}}>
                <Grid item>
                    <Link href="/blogs/blog-archive">
                    <Button>
                        <Typography classes={{root: classes.readMorebtnText}}>
                            Read More {">"}
                        </Typography>
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BlogSection

