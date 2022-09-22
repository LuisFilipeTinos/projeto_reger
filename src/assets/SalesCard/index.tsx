import './style.css'

function SalesCard(data: any){
    return(
        <div className="lp2-card">
            <h2 className="lp2-sales-title">Vendas</h2>
            <div className="lp2-container-width">
                <table className="lp2-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">DATA</th>
                            <th>VENDEDOR</th>
                            <th className="show992">VISITAS</th>
                            <th className="show992">VENDAS</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#333</td>
                            <td className="show576">18/09/2020</td>
                            <td>Carlão</td>
                            <td className="show992">15</td>
                            <td className="show992">7</td>
                            <td>R$ 5.000,00</td>
                        </tr>
                        <tr>
                            <td className="show992">#333</td>
                            <td className="show576">18/09/2020</td>
                            <td>Carlão</td>
                            <td className="show992">15</td>
                            <td className="show992">7</td>
                            <td>R$ 5.000,00</td>
                        </tr>
                        <tr>
                            <td className="show992">#333</td>
                            <td className="show576">18/09/2020</td>
                            <td>Carlão</td>
                            <td className="show992">15</td>
                            <td className="show992">7</td>
                            <td>R$ 5.000,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
