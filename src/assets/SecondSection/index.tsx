import './style.css'

function SecondSection() {
    return (
        <div className='text-align-container flex-element'>
            <img className='fundo2' src='src\images\fundoVerde21.png' alt='imagem_reger'></img>
                <div className='text-content-size'>
                    <h2 className='h2-sub-title pdd-right-76' id='title'>O QUE FAZEMOS</h2>
                    <div className="green-border padding-b-50 padding-t-50">
                        <p className='text-muted padding-b-50 pdd-right-76'>O Projeto Reger tem a missão de reduzir os 
                        resíduos e, para isso, incentiva os alunos e funcionários da Unisagrado a tomarem 
                        medidas que reduzem o consumo e/ou modificam a forma como os resíduos são descartados, 
                        pensando, sempre na sustentabilidade e no descarte correto. O projeto já teve 189 pessoas 
                        atendidas de forma direta e 8340 atendimentos de forma indireta.</p>
                    </div>
                </div>
            <img className='image_1' src='src\images\OQueFazemos.png' alt='imagem_reger'></img>
        </div>
    )
}

export default SecondSection