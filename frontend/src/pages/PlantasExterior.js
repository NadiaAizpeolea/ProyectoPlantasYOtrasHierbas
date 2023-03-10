import '../styles/components/pages/Plantas.css';

import React from "react";
const PlantasExterior = (props) => {
    return (
        <main className='holder'>
            <div class="historia">
                <h2>Plantas de Exterior</h2>
                <p>Lo sé, en realidad, todas las plamtas son de Exterior, pero, para los que vivimos en la ciudad, no todas se adaptan fácil a una maceta,
                    hay que ser rigurosos con los riegos, especialmente si están en terraza como las mías, te vas una semana de vacaciones y volves a un
                    páramo desolado si no llovió. Aca voy a incluir ejemplares de fácil cuidado que voy descubriendo con los tips de mi suegra y mi vivero amigo.
                </p>
            </div>
            <div class="Plantas">
                <img src="Img/PlantasExterior/vinca.jpg" alt="Vinca" />
                <div class="info">
                    <h4>Vinca</h4>
                    <p>Es una planta perenne, se mantiene verde todo el año y es muy frondosa, tolera el sol directo sin problemas, mi único consejo es que le pongan
                        un plato debajo de la maceta para mantener un poco la humedad y riego frecuente en época de calor.
                    </p>
                </div>
            </div>
            <div class="Plantas">
                <img src="Img/PlantasExterior/camelia.jpg" alt="Camelia" />
                <div class="info">
                    <h4>Camelia</h4>
                    <p>Una planta que en tierra puede llegar a ser enorme, pero se adapta muy bien a la maceta, prefiere el sol de tarde o media sombra y florece en invierno.
                        Necesita una maceta grande con buen drenaje y cuidada del viento, especial para poner contra la pared. Se recomeinda regar sin mojar las flores
                    </p>
                </div>
            </div>
            <div class="Plantas">
                <img src="Img/PlantasExterior/JazminDelCabo.jpg" alt="Jazmín del Cabo" />
                <div class="info">
                    <h4>Jazmín del Cabo</h4>
                    <p>Es una de las flores más hermosas y perfumadas, pero es bastante demandante con los cuidados y su delicioso aroma atrae plagas de jardín. Necesita
                        riego frecuente en exterior, estar a media sombra y poda de hojas dañadas. Lo mas recomendable es usar un insecticida preventivo, como en casa tengo
                        niños pequeños y gatos, la opción que más resultado me da es el que viene en cápsulas, hay que poner nuevas cada 45 días, pero no requiere vaporizar
                        nada en las hojas. Hay tanto insecticidas como fungicidas de esta modalidad.
                    </p>
                </div>
            </div>
            <div class="Plantas">
                <img src="Img/PlantasExterior/OjoDePoeta.jpg" alt="OjoDePoeta" />
                <div class="info">
                    <h4>Ojo de Poeta</h4>
                    <p>Una de las flores que cuando vas por los pueblos es muy normal ver en los cercos, no se ve tanto en las cuidades, por eso la primera vez que la vi me
                        llamó muchísimo la atención, con sus flores en tonos naranjas (las mas comunes), amarillas o rosadas, ama el sol directo, pero requiere riegos muy
                        frecuentes. Es una enredadera, pero no se trepa a las paredes ni se adhiere, necesita una malla o alguna superficie donde poder enredarse para
                        expandirse. No agarra muchas plagas y es muy llamativa.
                    </p>
                </div>

            </div>


        </main>
    );
}

export default PlantasExterior;