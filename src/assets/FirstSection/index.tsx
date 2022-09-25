import './style.css'

function FirstSection() {
    return (
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
    )
}

export default FirstSection