import '../FourthSection/style.css'

function FourthSection() {
    return (
        <div className='text-align-container flex-element'>
            <img className='fundo4' src='src\images\fundoVerde21.png' alt='imagem_reger'></img>
            <div className='text-content-size'>
                <h2 className='h2-sub-title'>ONDE ESTAMOS</h2>
                <p className='text-muted padding-b-50'>Este projeto foi realizado em conjunto pelos alunos de 2022 da turma de Design composta por:
                <br></br>
                -Centro Socio Educativo Irmã Adelaide,
                <br></br>
                -Colé Nossa Senhora Aparecida,
                <br></br>
                -Colégio São Francisco Bauru,
                <br></br>
                -Laudato Si Action de Roma,
                <br></br>
                -Araçatuba</p>
            </div>
            <img className='image_ondeEstamos padding-left-50' src='src\images\ondeEstamos.png' alt='imagem_reger'></img>
        </div>
    )
}

export default FourthSection