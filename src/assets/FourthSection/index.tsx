import { Component } from 'react'
import '../FourthSection/style.css'


class FourthSection extends Component{
    render(){
        return (          
            <div className='text-align-container2 flex-element'>
                <img className='fundo4' src='src\images\fundoVerde21.png' alt='imagem_reger'></img>
                <div className='text-content-size'>
                    <h2 className='h2-sub-title'>Quem Somos</h2>
                    <p className='text-muted padding-b-50'>Este projeto foi realizado em conjunto pelos alunos de 2022 da turma de Design composta por:
                    <br></br>
                    <br></br>
                    Turma de Design:
                    <br></br>
                    -Giullia Ferreira
                    <br></br>
                    -Yuri Galvão
                    <br></br>
                    -Cauê Henrique
                    <br></br>
                    -Amanda Ursini
                    <br></br>
                    -Cauê Henrique
                    <br></br>
                    <br></br>
                    Turma de Jogos Digitais:
                    <br></br>
                    -Luis Filipe Tinós
                    <br></br>
                    -Gabriel Belanciere
                    <br></br>
                    -Lara Magrini
                    <br></br>
                    -Milton Maia Soares
                    <br></br>
                    -Vitor Kasmarek
                    <br></br>
                    -Yan
                    <br></br>
                    -Zepa?
                    <br></br>
                    -Giovani Taveira
                    <br></br></p>
                </div>
            </div>
        )
    }

}

export default FourthSection