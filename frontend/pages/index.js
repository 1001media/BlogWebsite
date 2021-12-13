
import NavBar from "../component/navBar"
import Hero from "../component/home/hero"
import NewsLatter from "../component/home/newsLetter"
import Section from "../component/home/section"
import ClientSection from "../component/home/client"
import BlogSection from "../component/home/blogSection"
import Footer from "../component/footer"

import { Snackbar, makeStyles } from "@material-ui/core"

import { useState } from "react"
import theme from "../styles/theme"

import Head from "next/head"

const useStyles = makeStyles({
  gap:{
    padding: ".5rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  }
})

export default function Home({ blogData }) {

  const classes = useStyles()

  const [ showSnackBar, setShowSnackBar ] = useState(false)
  const [ snackbarMessage, setSnackBarMessage ] = useState("")
  const [ snackBarColor, setSnackBarColor] = useState("")

  return (
    <div className={classes.gap}>
      <Head>
          <title>Blog</title>
          <meta name="DC.title" content= 'Quality first'/>
          <meta name="keywords" content="name, good , great" />
          <meta name="description" content="This is good i love it" />
      </Head>
      <NavBar />
      <Hero />
      <NewsLatter 
      setShowSnackBar={setShowSnackBar} 
      setSnackBarColor={setSnackBarColor}
      setSnackBarMessage={setSnackBarMessage}
      />
      <Section />
      <ClientSection />
      <BlogSection blogData={blogData} />
      <Footer />

      <Snackbar
      open={showSnackBar}
      anchorOrigin={ 'top', 'center' }
      autoHideDuration={6000}
      onClose={() => setShowSnackBar(false)}
      message={snackbarMessage}
      anchorOrigin = {{
          vertical :"top", horizontal : "center"
      }}
      ContentProps = {{
          style : { backgroundColor: snackBarColor},
              fontSize: "1.25rem" 
        }}
      />

    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://blogfiver.herokuapp.com/blogs')
  const data = await res.json()

  return {
    props: { blogData: data },
    revalidate: 60
  }
} 
