import '../SecondSection/style.css'

function SecondSectionAlt() {
    return (
        <div className='text-align-container flex-element'>
            <img className='image' src='src\images\unisagrado-bauru-sp.webp' alt='imagem_reger'></img>
            <div className='text-content-size'>
                <h2 className='h2-sub-title'>ONDE ESTAMOS</h2>
                <p className='text-muted padding-b-50'>O projeto é realizado na Unisagrado, nas segundas e quartas-feirasm das 18h às 19h.</p>
            </div>
        </div>
    )
}

export default SecondSectionAlt