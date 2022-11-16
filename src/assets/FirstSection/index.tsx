import './style.css'

function FirstSection() {
    /*return (
        <div className='text-align-container'>
            <h2 className='h2-main-title'>O PROJETO</h2>
            <p className='text-muted padding-b-50 text-muted-first-padding'>O Projeto Reger - Redução da Geração de Resíduos - é um projeto de extensão 
            da Unisagrado que tem o objetivo de reduzir a quantidade de resíduos descartados. Esta preocupação com os resíduos vem de uma necessidade não só da instituição, 
            mas um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo. </p>
            <p className='text-muted padding-b-50 text-muted-first-padding'>Assista ao vídeo abaixo para saber mais sobre o projeto e suas atividades.</p>
            <iframe width="1136" height="557" 
                src="https://www.youtube.com/embed/FkzpNFv-E8g?list=PLdFvcx9yM9QC5FjaDpalhUYs9CurfNYLu" 
                title="REGER - Redução da Geração de Resíduos" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
             </iframe>
        </div>
    )*/
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
            <span>
                <img className='image' src='src\images\trachCans.jpeg' alt='imagem_reger'></img>
                <img className='image' src='src\images\water.jpeg' alt='imagem_reger'></img>
            </span>
            <span>
                <img className='image' src='src\images\burned.jpeg' alt='imagem_reger'></img>
                <img className='image' src='src\images\leafs.jpeg' alt='imagem_reger'></img>
            </span>
        </div>
    )
}

export default FirstSection