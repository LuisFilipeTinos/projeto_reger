import './style.css'

function Footer() {
    return (
        <footer>
            <div>
                <hr className='hr-style'></hr>
                <div className='div-medias'>
                    <p className='footer-text-style footer-elements'>Site desenvolvido pelos alunos do segundo ano do curso de Jogos Digitais, 2022.</p>
                    <a href="https://www.facebook.com/UNISAGRADOBauru">
                        <i className="fa-brands fa-square-facebook fa-2x footer-elements icon-media"></i>
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer