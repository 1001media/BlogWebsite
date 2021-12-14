import { Grid, Typography, Avatar, Button, useMediaQuery} from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"
import theme from "../../styles/theme"

import NavBar from "../../component/navBar"
import Hero from "../../component/home/hero"

import Link from "next/link"

import ReactMarkdown from "react-markdown"

import BlogCard from "../../component/home/blogCard"
import Footer from "../../component/footer"

import Head from "next/head"

import style from  "../../styles/Markdown.module.css"

const useStyles = makeStyles({
    mainContainer : {
      
        height : "13rem",
        [theme.breakpoints.down("sm")] : {
            height : "15rem",
        }
    },
    secondContainer:  {
        position: "absolute",
        marginTop: "3rem",
        paddingBottom: "2rem" ,
        [theme.breakpoints.down("sm")] :{
            marginTop: "1rem",
            paddingBottom: "0"
        }
    },
    titleText: { 
        fontSize : "2.5rem",
        fontWeight : "bold"
    },
    subTitleText : {
        fontSize: "1.5rem",
        fontWeight: 500
    },
    avatar : {
        backgroundColor : "black",
        cursor : "pointer",
        width : "4rem",
        height : "4rem"
    },
    avatarContainer : {
        position: "relative",
        right : 300,
        [theme.breakpoints.down("md")]: {
            right: 250
        }
    },
    blogPostContainer : {
        backgroundColor :"#D8E4F0",
        height : "auto",
        width : "100%",
        position : "absolute",
        [theme.breakpoints.down("sm")]: {
            backgroundColor : "#F5FFFA"
        }
    },
    textContainer : {
        marginTop: "7rem",
        marginBottom: "3rem",
        paddingBottom : "10rem",
        backgroundColor :"#fff",
        width: "50rem",
        height: "auto",
        [theme.breakpoints.down("sm")] : {
            width : "100%",
            height: "auto"
        }
    },
    imageContainer : {
        position: "relative",
        top : -55,
        width: "40rem",
        height : "20rem",
        borderStartStartRadius: 50,
        [theme.breakpoints.down("sm")] : {
            width: "90%",
            height : "15rem",
    
        }

    },
    img: {
        width: "100%",
        borderStartStartRadius : 25,
        borderTopRightRadius : 25,
        height : "100%",
        backgroundPosition: "center",
        backgroundSize : "contain",
        backgroundrepeat : "no-repeat",
    },
    gap: {
        paddingTop: "3rem",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "1.2rem"
        }
    },
    text :{
        wordSpacing: "5px",
        lineHeight: "2rem",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        fontWeight: 500,
        fontSize: "1rem",
        overflow: "hidden",

        [theme.breakpoints.down("sm")]: {
            paddingLeft: "2rem",
            paddingRight: "2rem"
        }
    },
    markdownContainer: {
        width: "100%",
        height: "auto",
        
    },
    slideBar : {
        width: "16rem",
        height: "22rem",
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: 20,
        position: "relative",
        bottom: "70rem",
        left: "31rem"
    },
    slideBarHeaderText: {
        fontWeight: "bold",
        fontSize: "1.5rem"
    } ,
    slideBarImageContainer : {
        width: "14rem",
        height: "7rem"
    },
    sildeBarImage : {
        width: "100%",
        borderStartStartRadius : 15,
        borderTopRightRadius : 15,
        height : "100%",
        backgroundPosition: "center",
        backgroundSize : "contain",
        backgroundrepeat : "no-repeat",
    },
    slideBarDescriptionText : {
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
        fontSize: ".85rem",
        wordSpacing: "5px"
    },
    slideBarbtnContainer : {
        position: "relative",
        right: "2rem",
        paddingTop: ".5rem",
        paddingBottom: "1rem",

    },
    sildeBarbtn : {
        borderRadius : 10,
    },
    slideBarBtntext : {
        textTransform : "none",
        padding: ".3rem 1rem"
    },
    relatedPostConntainer: {
        marginBottom: "5rem"
    },
    relatedPostText: { 
        fontWeight: 500,
        fontSize: "1.3rem",
        marginBottom: "1rem"
    }
})



const BlogPost = ({ blog, blogData }) => {
    const classes = useStyles()

    const matchesMD = useMediaQuery(th => theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(th => theme.breakpoints.down("sm"))

    
    if(!blog) return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item>
                <h3>Loading...</h3>
            </Grid>
        </Grid>
    )

    return (
        <>
        <Head>
            <title>{blog?.heading}</title>
            <meta name="DC.title" content={blog?.metatitle} />
            <meta name="keywords" content={blog?.metakeywords} />
            <meta name="description" content={blog?.metadescription} />
        </Head>
        
        <NavBar/>
        <Hero />
        <Grid container classes={{root: classes.mainContainer}} >
            <Grid item container  alignItems="center" justifyContent="center" classes={{root: classes.secondContainer}}>
                {matchesSM ? null : (
                                   <Grid item classes={{root: classes.avatarContainer}}>
                                   <Link href="/">
                                   <Avatar classes={{root: classes.avatar}}>
                                       <Typography>{"<-"}</Typography>
                                   </Avatar>
                                   </Link>
                                </Grid>
                )}
                <Grid item>
                    <Typography align="center" classes={{root:classes.titleText}}>
                        {blog[0].heading}
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} classes={{root: classes.subTitleText}}>
                          Category: {blog[0].category} Date:{blog[0].date} 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

        <Grid container classes={{root: classes.blogPostContainer}} justifyContent="center">
           
            <Grid item container classes={{root: classes.textContainer}} alignItems="center" direction="column">

                <Grid item classes={{root: classes.imageContainer}}>
                
                <img className={classes.img} src={blog[0].image.url} alt="machine" />

                </Grid>

                <Grid item container classes={{root: classes.markdownContainer}}>
                    <Grid item>
                        <ReactMarkdown 
                        className={style.article}
                        >
                            {blog[0].blogText}
                        </ReactMarkdown>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item direction="column" container justifyContent="center" alignItems="center" classes={{root: classes.relatedPostConntainer}}>
                <Grid item>
                    <Typography classes={{root: classes.relatedPostText}}>
                        Related Posts
                    </Typography>
                </Grid>

                <Grid item container justify="center">
                {blogData.slice(0, 2).map((blog, i) => (
                    <BlogCard key={i} isRelatedPost={true} blog={blog} />
                ))}
                </Grid>
                
            </Grid> 

            
            {matchesMD ? undefined : (

           <Grid item container classes={{root: classes.slideBar}}>
              <Grid item container direction="column" alignItems="center" justifyContent="space-around" > 
           <Grid item>
                <Typography classes={{root: classes.slideBarHeaderText}}>
                  Digital Marketing
                </Typography>
            </Grid>
            <Grid item classes={{root: classes.slideBarImageContainer}}>
                <img  className={classes.sildeBarImage} src="/hero-image.png" alt="machine" />
            </Grid>
            <Grid item>
                <Typography align="center" classes={{root: classes.slideBarDescriptionText}}>
                   Get the best advice on digital marketing and search engine optimization.
                </Typography>
           </Grid>
           <Grid item classes={{root : classes.slideBarbtnContainer}}>
               <Button classes={{root: classes.sildeBarbtn}} variant="contained" color="primary">
                    <Typography classes={{root: classes.slideBarBtntext}}>
                        Learn More
                    </Typography>
            </Button>
           </Grid>
          </Grid>
          </Grid>

          )}
             <Footer /> 
        </Grid> 
        <div className="article">
            <p>bed</p>
        </div>
        <style jsx>{`
        .article p{
            word-spacing: 5px;
            font-size: 1rem;
            line-height:2rem
        }
        }
      `}</style>
       
        </>
        
    )
}

export default BlogPost

export const getStaticPaths  = async () => {
    const res = await fetch('https://blogfiver.herokuapp.com/blogs')
    const datas = await res.json()

    const paths = datas.map(data => {
        return {
            params: { slug : data.slug.toString(), blogData: data, }, 
            
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.slug
    const res = await fetch(`https://blogfiver.herokuapp.com/blogs/?slug=${id}`)
    const res2 = await fetch('https://blogfiver.herokuapp.com/blogs')
    const data = await res.json()
    const data2 = await res2.json()

    return { 
        props: { blog: data, blogData: data2 }  ,
        revalidate: 5,
    }
}
