import React from 'react';
import '../styles/components/pages/NovedadesPage.css';

const NovedadesPage= (props)=>{
    return(
        <section className="holder">
            <h2>Novedades</h2>
    <div class="novedades">
      <h4>Riego contínuo</h4>
      <h5>Riego por goteo</h5>
      <p>Este método es especialmente eficaz para días de mucho calor o climas áridos. Para ayudar un poco en vacaciones
        sirve, pero no nos evita tener que encargar a alguien que riegue o que recargue el recipiente, salvo que sea
        programado
      </p>
    </div>
    <div class="novedades">
      <h4>Huerta</h4>
      <h5>Ajos</h5>
      <p>Este es el momento ideal para plantar ajos, recorda que debes plantar un diente, siempre con la punta para
        arriba y tener muuuucha paciencia, ya que tarda 9 meses en dar
      </p>
    </div>
    <div class="novedades">
      <h4>Huerta</h4>
      <h5>Ajíes</h5>
      <p>Si plantaste el mes pasado, ya están por abrir las primeras flores, recorda que si no ves polinizadores en tu
        espacio verde, podes realizar la polinización con un algodón límpio tocando el centro de cada una de las flores
        y luego pasar a otra. Nos esperan unos ajíes increibles!
      </p>
    </div>
    <div class="novedades">
      <h4>Calor extremo</h4>
      <h5>Consejos de riego</h5>
      <p>Hay alerta Naranja para varias provincias argentinas, estate atenta/o e intentá regar bien temprano
        abundantemente y a la noche sin tocar las hojas. Inluso revisá la tierra si llovió poco, para reforzar. Como
        siempre podes encontrar el link al SMN para ver el clima en tu ciudad
      </p>
    </div>

        </section>
    )

}

export default NovedadesPage;