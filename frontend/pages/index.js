
import NavBar from "../component/navBar"
import Hero from "../component/home/hero"
import NewsLatter from "../component/home/newsLetter"
import Section from "../component/home/section"
import ClientSection from "../component/home/client"
import BlogSection from "../component/home/blogSection"
import Footer from "../component/footer"

import { Snackbar } from "@material-ui/core"

import { useState } from "react"

import Head from "next/head"

export default function Home({ blogData }) {

  const [ showSnackBar, setShowSnackBar ] = useState(false)
  const [ snackbarMessage, setSnackBarMessage ] = useState("")
  const [ snackBarColor, setSnackBarColor] = useState("")

  return (
    <div style={{padding: ".5rem"}}>
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
