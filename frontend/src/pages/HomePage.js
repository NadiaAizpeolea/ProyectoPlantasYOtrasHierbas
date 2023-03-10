const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/planta.jpg" alt="Semilla germinando" />
            </div>
            <div className="columnas">
                <div className="Bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Este es un espacio donde encontrarán tips, consejos y novedades del mundo de las plantas para el hogar,  tanto si tenés un jardín,
                        como si tenés un pequeño balcón, no te pierdas la oportunidad de decorar y darle vida a tus espacios, exteriores e interiores.
                        Las plantas traen paz y armonía al hogar, acompañame en este viaje y seguro vas a poder desconectarte del estrés cotidiano y conectarte
                        con vos mismo. </p>
                </div>
                <div className="Testimonios">
                    <h2>Testimonios</h2>
                    <div className="Testimonio">
                        <span className="Cita">Genial! Fue un antes y un después para mi triste y pequeño balcón!</span>
                        <span className="Autor">autor nn</span>
                    </div>
                </div>
            </div>
        </main>

    )

}