import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import theme from "../../styles/theme"

import { useState } from "react"

import  NavBar from "../../component/navBar"
import Footer from "../../component/footer"
import Hero from "../../component/home/hero"
import BlogCard from "../../component/home/blogCard"

const useStyles = makeStyles({
    mainContainer : {
        backgroundColor : theme.palette.primary.main,
        height :"auto"
    },
    titleText:  {
        color: "#fff",
        paddingTop: "2rem",
        fontSize : "2.5rem"
    },
    descriptionText: {
        color: "#fff",
        paddingTop: "1rem",
        fontSize: "1.2rem"
    },
    categoryText : {
        color: "#fff",
        fontSize: ".9rem"
    },
    categoryContainer : {
        paddingTop: "2rem",
        paddingBottom: "3rem",
        cursor : "pointer"
    },
    inputContainer : {
        paddingBottom: "1rem"
    },
    input: {
        width : "40rem",
        height: "3rem",
        color: "black",
        fontSize : "1.5rem",
        border : "none",
        padding: "8px",
        outline : "none",
        "&::placeholder" : {
            color: "black",
            fontWeight :400,
            fontSize : "1.2rem"
        },
        "&::label" : {
            color: "#fff",
            fontSize: "1.5rem"
        },
        [theme.breakpoints.down("sm")] : {
            width: "12rem"
        }
    },
    searchBtn : {
        marginLeft: "1rem",
        width: "8rem",
        height: "3rem",
        borderRadius : "0",
        "&:hover" : {
            backgroundColor: theme.palette.secondary.main
        },
        [theme.breakpoints.down("sm")] : {
            width: "6rem"
        }
    },
    blogCard: {
        paddingBottom: "3rem"
    },
    cancelText: {
        color: "#fff",
        fontSize : "1rem"
    }
}) 

const BlogArchive = ({ data }) => {
    const classes = useStyles()

    const [filterData, setFilterData] = useState(null)
    const [searchText, setSearchText] = useState("")

    const handleFilter = name => {
        const datas = data.filter(item => item.category === name)
        setFilterData(datas)
    }

    const handleCancel = () => {
        setFilterData(null)
        setSearchText("")
    }

    const handleSearch = () => {
        (searchText)
            data.filter(val => {
                if(searchText === "") {
                    return null
                }else if(val.heading.toLowerCase().includes(searchText.toLowerCase())) {
                    setFilterData([val])
                }
        })
    }

    return (
        <>
        <NavBar />
        <Hero />

        <Grid container classes={{root: classes.mainContainer}}>
            <Grid item container direction="column" alignItems="center">
                <Grid item>
                    <Typography classes={{root: classes.titleText}}>
                        Blog Section Title
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography classes={{root: classes.descriptionText}}>
                        Blog Page Description
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item container justifyContent="space-around" classes={{root: classes.categoryContainer}}>
                {data.map((item, i) => (
                    <Grid item key={i} onClick={() => handleFilter(item.category)}>
                        <Typography classes={{root: classes.categoryText}}>
                            {item.category}
                        </Typography>
                    </Grid>
                ))}
                {filterData && (
                    <Grid item>
                        <Button onClick={handleCancel}>
                            <Typography classes={{root: classes.cancelText}}>
                                cancel
                            </Typography>
                        </Button>
                    </Grid>
                )}
                </Grid>

                <Grid item container justifyContent="center">
                    <Grid item classes={{root: classes.inputContainer}}>
                        <input 
                        value={searchText} 
                        onChange={e => setSearchText(e.target.value)}
                        placeholder="search" 
                        type="text" 
                        className={classes.input}
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={handleSearch} classes={{root: classes.searchBtn}} variant="contained" color="secondary">
                            <Typography>
                                Search
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid item container justifyContent="space-around" classes={{root: classes.blogCard}}>
                    {!filterData ? (
                        data.map((item, i) => (
                            <BlogCard key={i} blog={item} />
                        ))
                    ): filterData.map((item, i) => (
                        <BlogCard blog={item} key={i} />
                    ))}
                </Grid>
            </Grid>
            <Footer />
        </Grid>
        </>
    )
}

export default  BlogArchive

export const getStaticProps = async() => {
    const res = await fetch('https://blogfiver.herokuapp.com/blogs')
    const data = await res.json()

    return {
        props: { data },
        revalidate: 60
    }
}
