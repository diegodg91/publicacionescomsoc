const AcercaDe = () => {

    return(
        <>
        <section className="container main__content">
        <div className="row align-items-center mt-5 mb-5">
            <div className="col-sm-12 col-md-6">
                <h4 className="mt-5 fs-1 fw-bold text-secondary">Acerca de</h4>
                <hr className="border border-secondary border-1"/>
                <p>
                Somos un equipo compuesto por estudiantes de la Carrera de Comunicación Social perteneciente a la Universidad Nacional del Nordeste que se propuso la creación de un repositorio digital donde se compartan los trabajos finales de la carrera.<br/>
                Creamos este sitio web con contenido multimedia compuesto por fotos, audios, textos y videos para poder brindar una mayor adecuación a las diferentes modalidades en que los alumnos/as pueden presentar su trabajo final de la carrera.<br/>
                Los reservorios electrónicos cuentan con la ventaja de ser las áreas de información que agilizan la comunicación y la interacción entre los individuos y el colectivo social.

                </p>
            </div>
            <div className="col-sm-12 col-md-6">
                <img src="/img/acercade.jpg" alt="egresados" className="img-main" />
            </div>
        </div>


        <div className="row align-items-center mt-5 mb-5">
        <div className="col-sm-12 col-md-6">
                <img src="/img/derechos.jpg" alt="bibliografia" className="img-main" />
            </div>
            <div className="col-sm-12 col-md-6">
                <h4 className="mt-5 fs-1 fw-bold text-secondary">Derechos de autor</h4>
                <hr className="border border-secondary border-1"/>
                <p>
                La publicación de los trabajos finales de grado en el repositorio web preserva los derechos de autor y respeta el valor de propietarios de los trabajos a los graduados. Estos pueden pedir sin razón fundada la baja del material o del mismo en el sitio web.<br/>
                El repositorio es de acceso y carácter gratuito, no tendrá fines lucrativos, no se venderá ni alquilará el contenido a otras instituciones privadas o gubernamentales. El contenido es de propiedad absoluta de los autores de los trabajos finales expuestos.

                </p>
            </div>
           
        </div>

        <div className="row align-items-center mt-5 mb-5">
        
            <div className="col-sm-12 col-md-6">
                <h4 className="mt-5 fs-1 fw-bold text-secondary">Contácto</h4>
                <hr className="border border-secondary border-1"/>
                <p>
                Para enviar tu trabajo final de grado de la carrera de Comunicación Social de la UNNE contáctate con la casilla de correo:<br/>
                <span className="fw-semibold text-primary">publicacionescomsoc1@gmail.com</span><br/>
                Recordá que tu trabajo tiene que estar en formato PDF y  debe detallar las siguientes categorías:
                <ul>
                    <li>
                        - Datos personales (incluyendo forma de contacto)
                    </li>
                    <li>
                        - Tematica
                    </li>
                    <li>
                        - Tipo de trabajo
                    </li>
                    <li>
                        - Tipo de soporte
                    </li>
                </ul>


                </p>
            </div>

            <div className="col-sm-12 col-md-6">
                
            </div>
           
        </div>
        </section>
        </>
        
    )
}

export default AcercaDe;