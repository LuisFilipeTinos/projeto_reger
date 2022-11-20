import './style.css'

function Header() {
    return (
        <header>
            <div id="header-container">
                <h1 className="header-item">PROJETO REGER</h1>
                <a href='#first' className="header-item">O PROJETO</a>
                <a href='#second' className="header-item">O QUE FAZEMOS</a>
                <a href='#secondAlt' className="header-item">ONDE ESTAMOS</a>
                <a href='src\assets\FourthSection\index.tsx' className="header-item">QUEM SOMOS</a>
                <a href='#third' className="header-item">DICAS</a>
            </div>
        </header>
    )
}

export default Header