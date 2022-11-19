import './bootstrap-iso.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

function FirstSection() {
    return (
        <div className='text-align-container flex-element'>
            <img className='fundo' src='src\images\fundoVerde21.png' alt='imagem_reger'></img>
            <div className='text-content-size'>

                <h2 className='h2-sub-title padding-b-50' id='title'>O PROJETO</h2>

                <div className="green-border">
                    <p className='text-muted padding-b-50 padding-t-50'>O alvo deste projeto é 
                    reduzir tomando medidas no sentido
                    de reduzir o consumo ou pelo menos
                    modificar a forma como o fazemos e
                    modificar os hábitos não sustentáveis.
                    </p>
                </div>
            </div>
            <div className="bootstrap-iso">
                <Carousel>
                    <Carousel.Item>
                    <img
                        className='bootstrap-div d-block w-100'
                        src="src\images\trachCans.jpeg"
                        alt="Image One"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className='bootstrap-div d-block w-100'
                        src="src\images\water.jpeg"
                        alt="Image Two"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className='bootstrap-div d-block w-100'
                        src="src\images\burned.jpeg"
                        alt="Image Three"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className='bootstrap-div d-block w-100'
                        src="src\images\leafs.jpeg"
                        alt="Image Four"
                    />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default FirstSection