import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
      <>
        <Header/>
        <Nav />
        <About />
        <Experience/>
        <Contact />
        <Footer />

      </>
    

  )
}

export default App