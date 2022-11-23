import '../SecondSectionAlt/style.css'

function SecondSectionAlt() {
    return (
        <div className='text-align-container flex-element'>
            <img className='fundo4' src='src\images\fundoVerde21.png' alt='imagem_reger'></img>
            <div className='text-content-size'>
                <h2 className='h2-sub-title'>ONDE ESTAMOS</h2>
                <p className='text-muted padding-b-50'>O projeto teve inicio na universidade UNISAGRADO mas atualmente se estendeu para diversos locais:
                    <br></br>
                    <br></br>
                    -Centro Socio Educativo Irmã Adelaide,
                    <br></br>
                    -Colégio Nossa Senhora Aparecida Araçatuba,
                    <br></br>
                    -Colégio São Francisco Bauru,
                    <br></br>
                    -Laudato Si Action de Roma,
                    <br></br>
                </p>
            </div>
            <img className='image_ondeEstamos padding-left-50' src='src\images\ondeEstamos.png' alt='imagem_reger'></img>
        </div>
    )
}

export default SecondSectionAlt