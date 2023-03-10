import '../styles/components/pages/Plantas.css';

import React from "react";
const PlantasInterior = (props) => {
    return (
        <main className='holder'>
            <div class="historia">
                <h2>Plantas de Interior</h2>
                <p>Se denomina planta de interior a cualquier especie vegetal cultivada en lugares bajo techo, son variedades de
                    climas tropicales que se aclimatan en entornos geográficos ajenos gracias a que el cultivo en interior les
                    proporciona las condiciones adecuadas. No hay que confundirlas con algunas plantas de balcón o de jardín, que
                    se ubican en interiores temporalmente pero que para subsistir requieren periodos más largos al exterior.

                    Este tipo de plantas se cultivan normalmente con propósitos decorativos o por razones de salud, como
                    purificadores del aire. Pueden agruparse recreando ambientes selváticos, en invernaderos y miradores
                    acristalados; esto fue muy habitual en la época victoriana</p>
            </div>
            <div class="Plantas">
                <img src="Img/PlantasInterior/LirioDeLaPaz.jpg" alt="Lirio de la Paz"/>
                    <div class="info">
                        <h4>Lirio de la Paz o Spathiphylum</h4>
                        <p>Esta planta originaria de Colombia, Costa Rica y Panamá es muy fácil de cuidar y se ha adaptado muy bien a
                            los interiores.
                            Se destaca porque sus hojas nacen del risoma y su floración es contínua desde la primavera al otoño. Son
                            sensibles a las corrientes de aire y
                            al sol directo.
                        </p>
                    </div>
            </div>
            <div class="Plantas">
                <img src="Img/PlantasInterior/Diffenbachia.jpg" alt="Diffenbachia"/>
                    <div class="info">
                        <h4>Diffenbachia</h4>
                        <p>En realidad la Diffenbachia es un género de plantas que se cracterizan por manchas claras en sus hojas, las
                            hay desde pequeñas como la Diffenbachia Mariana
                            hasta la Amoena de grandes dimensiones y más ornamental. Son de muy fácil cuidado y les encanta la luz
                            indirecta. Me funcionaron especialmente bien en la
                            cocina. Hay que tener cuidado al momento de podar las hojas dado que su savia es tóxica y genera irritación en
                            la piel.
                        </p>
                    </div>
            </div>
            <div class="Plantas">
                <img src="Img/PlantasInterior/FicusElasticaVariegado.jpg" alt="FicusElastica"/>
                    <div class="info">
                        <h4>Ficus Elástica Variegado</h4>
                        <p>Es llamado comunmente Gomero o árbol de caucho, en este caso hablamos de la variedad variegada, con hermosas
                            manchas rosadas que resaltan un montón. Muy fácil de
                            cuidar pero hay que tener cuidado con el riego excesivo y con las plagas que puede atraer el exceso de
                            humedad.
                        </p>
                    </div>

            </div>

        </main>
     );
}

export default PlantasInterior;