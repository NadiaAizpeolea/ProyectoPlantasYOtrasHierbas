import '../styles/components/pages/ContactoPageS.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="Apellido">Apellido</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">email</label>
                        <input type="email" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>

                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>

            </div>
            <div class="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contartarse con nosotros a través de</p>
                <ul>
                    <li>email: contacto@plantasyotrashierbas.com.ar</li>
                    <li>
                        Intagram
                    </li>
                    <li>
                        Facebook
                    </li>
                    <li>
                        Twitter
                    </li>
                </ul>
            </div>
        </main>
    )
}