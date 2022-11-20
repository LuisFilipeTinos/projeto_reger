import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './assets/components/header'

import Footer from './assets/Footer'
import './index.css'
import FourthSection from './assets/FourthSection'
import { render } from 'react-dom'

class QuemSomos extends Component {
    render(){
        return (
            <>
            <head>
              <link href="src\styles\fontawesome\css\all.min.css" rel="stylesheet"></link>
            </head>
              <Header/>
              <main>
                <section id="fourth">
                  <FourthSection/>
                </section>      
              </main>   
              <Footer/>
            </>
          )
    }

}

export default QuemSomos
