import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './assets/components/header'
import Globe from './assets/Globe'
import FirstSection from './assets/FirstSection'
import SecondSection from './assets/SecondSection'
import SecondSectionAlt from './assets/SecondSectionAlt'
import ThirdSection from './assets/ThirdSection'
import ThirdSectionTip1 from './assets/ThirdSectionTip1'
import ThirdSectionTip2 from './assets/ThirdSectionTip2'
import ThirdSectionTip3 from './assets/ThirdSectionTip3'
import ThirdSectionTip4 from './assets/ThirdSectionTip4'
import ThirdSectionTip5 from './assets/ThirdSectionTip5'
import ThirdSectionTip6 from './assets/ThirdSectionTip6'
import Footer from './assets/Footer'
import './index.css'
import FourthSection from './assets/FourthSection'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <head>
      <link href="src\styles\fontawesome\css\all.min.css" rel="stylesheet"></link>
    </head>
      <Header/>
      <main>
        <section>
          <Globe/>
        </section>
        <section id="first">
        {/* <hr className="hr-style mgg-top-60"></hr> */}
          <FirstSection/>
        </section>
        <hr className="hr-style mgg-top-60"></hr>
        <section id="second">
          <SecondSection/>
        </section>
        <hr className="hr-style mgg-top-60"></hr>
        <section id="secondAlt">
          <SecondSectionAlt/>
        </section>
        <hr className="hr-style mgg-top-60"></hr>
        <section id="third">
          <ThirdSection/>
        </section>     
        <div className='grid-container'>
          <section id="">
            <ThirdSectionTip1/>
          </section>
          <section id="">
            <ThirdSectionTip2/>
          </section>
          <section id="">
            <ThirdSectionTip3/>
          </section>
          <section id="">
            <ThirdSectionTip4/>
          </section>
          <section id="">
            <ThirdSectionTip5/>
          </section>
          <section id="">
            <ThirdSectionTip6/>
          </section>
        </div>
        <hr className="hr-style mgg-top-60"></hr>
        <section id="fourth">
          <FourthSection/>
        </section>
      </main>   
      <Footer/>

    </>
  )
}

export default App
