import { Component } from 'react'
import '../FourthSection/style.css'


class FourthSection extends Component{
    render(){
        return (          
            <div className='text-align-container2 flex-element'>
                <div className="div-back-image">
                    <img className='fundo4 image-back-green' src='src\images\fundoVerde21.png' alt='imagem_reger'></img>
                </div>
                <div className='text-content-size2'>
                    <h2 className='h2-sub-title'>QUEM SOMOS</h2>
                    <p className='text-muted padding-b-50'>Este projeto foi realizado em conjunto pelos alunos de 2022 da turma de Design composta por:
                    <br></br>
                    <br></br>
                    Turma de Design:
                    <br></br>
                    <br></br>
                    -Giullia Ferreira
                    <br></br>
                    -Yuri Galvão
                    <br></br>
                    -Cauê Henrique
                    <br></br>
                    -Amanda Ursini
                    <br></br>
                    <br></br>
                    Turma de Jogos Digitais:
                    <br></br>
                    <br></br>
                    -Luis Filipe Tinós
                    <br></br>
                    -Gabriel Belancieri
                    <br></br>
                    -Lara Magrini
                    <br></br>
                    -Milton Maia Soares
                    <br></br>
                    -Vitor Kasmarek
                    <br></br>
                    -Yan Spetic Barbosa
                    <br></br>
                    -José Paulo Dassie Felippi
                    <br></br>
                    -Giovani Taveira
                    <br></br>
                    -Bianca Caparra Spadim
                    <br></br>
                    -Gabriel Carvalho de Oliveira
                </p>
                </div>
            </div>
        )
    }

}

export default FourthSection