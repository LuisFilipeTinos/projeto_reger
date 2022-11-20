import { Component } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import FourthSection from '../../FourthSection';
import './style.css';
class Header extends Component {
    render(){
        return (
            <div>
                <header>
                    <div id="header-container">

                        <h1 className="header-item">PROJETO REGER</h1>
                        <a href='#first' className="header-item">O PROJETO</a>
                        <a href='#second' className="header-item">O QUE FAZEMOS</a>
                        <a href='#secondAlt' className="header-item">ONDE ESTAMOS</a>
                        {/* <Link to='/QuemSomos' className="header-item">QUEM SOMOS</Link>               */}
                        <a href='#third' className="header-item">DICAS</a>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route  path='/'/>
                        <Route  path='/QuemSomos' element={<FourthSection/>} />
                    </Routes>
                </main>

            </div>
        )
    }

}

export default Header