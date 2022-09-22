import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './assets/components/header'
import SalesCard  from './assets/SalesCard'
import FirstSection from './assets/FirstSection'
import SecondSection from './assets/SecondSection'
import ThirdSection from './assets/ThirdSection'
import './index.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <section id="first">
          <FirstSection/>
        </section>
        <section id="second">
          <SecondSection/>
        </section>
        <section id="second">
          <SecondSection/>
        </section>
        <section id="second">
          <SecondSection/>
        </section>
        <section id="second">
          <SecondSection/>
        </section>
        <section id="second">
          <SecondSection/>
        </section>
        <div className='grid-container'>
          <section id="third">
            <ThirdSection/>
          </section>
          <section id="third">
            <ThirdSection/>
          </section>
          <section id="third">
            <ThirdSection/>
          </section>
          <section id="third">
            <ThirdSection/>
          </section>
          <section id="third">
            <ThirdSection/>
          </section>
          <section id="third">
            <ThirdSection/>
          </section>
        </div>
      </main>    
    </>
  )
}

export default App
