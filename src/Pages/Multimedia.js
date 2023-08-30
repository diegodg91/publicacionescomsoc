import React from "react";
import Container from 'react-bootstrap/Container';

const Multimedia = () =>{
return(
    
  <Container>
    <div className="row align-items-center g-4 mt-5 mb-5">

    <div className="col-12 d-flex flex-column">
    <h1 className="mt-3 pb-3 fw-bold text-dark text-uppercase border-bottom border-2 border-dark">Espacio Multimedia</h1>
    <img src="/img/student.jpg" alt="multimeda PSC" className="mt-4 img-main"/>
    
    </div>

    <div className="col-12 col-md-6 col-lg-6 mt-5">
        <h3 className="text-secondary fw-semibold">"Voces Diversas, la Marcha del Orgullo LGBTTTIQ en la ciudad de Corrientes”</h3>
        <p className="mt-4 lh-lg">Es un documental televisivo que reconstruye la historia de la Marcha del Colectivo LGBTTTIQ (2012-2016) a través de los testimonios de los/as entrevistados/as y permite reconocer cómo se formó este espacio atravesado por tramas políticas, sociales y culturales. El producto audiovisual se realizó en el marco de la presentación del trabajo final de la Licenciatura en Comunicación Social de la Universidad Nacional del Nordeste (UNNE). Fue realizado por las alumnas Constanza Almirón y María Virginia Acosta.</p>
    </div>
        <div className="col-12 col-md-6 col-lg-6">
        <div class="ratio ratio-16x9 mt-5">
        <iframe src="https://www.youtube.com/embed/n0Bt59C9QOk?si=3aEZztHE_VH8dDup" title="Voces diversas-lgtb corrientes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <hr></hr>

    <div className="col-12 col-md-12 mt-5">
        <h3 className="text-secondary fw-semibold">Soportes audiovisuales como herramientas para la comunicación institucional estratégica</h3>
        <p className="mt-2 lh-lg">Esta presentación final de tesina de la Licenciatura en Comunicación Social de la UNNE plantea la producción de un pack de videos institucionales que serán utilizados por la Facultad de Ingeniería (UNNE) como herramienta para lo comunicación externa de la institución. Fue realizado por la alumna Cynthia Jara.</p>
    </div>

        {/* 4 videos */}

        <div className="col-12 col-md-6 col-lg-6 mt-3">
            <h5 className="text-secondary">Producción audiovisual destinada a los ingresantes y aspirantes a ingresar a la Facultad de Ingeniería (UNNE).</h5>
                <div class="ratio ratio-16x9 mt-3 mb-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GrjqZd8GSGs?si=lhxtKyR0slnkCVX7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 mt-3">
            <h5 className="text-secondary">Producción audiovisual interinstitucional que refleja el potencial de los alumnos/as y graduados/as para su inserción en las instituciones con las que la Facultad tiene convenios y pasantías.</h5>
                <div class="ratio ratio-16x9 mt-3 mb-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wkv35kPDd8E?si=pzqzUWBwJi7mCGp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 mt-3">
            <h5 className="text-secondary">Producción audiovisual interinstitucional que refleja el potencial de los alumnos/as y graduados/as para su inserción en las instituciones con las que la Facultad tiene convenios y pasantías.</h5>
                <div class="ratio ratio-16x9 mt-3 mb-5">
                <iframe src="https://www.youtube.com/embed/sWG-w5E34LQ?si=prG7vN3VmUr01-b8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                
                </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 mt-3">
            <h5 className="text-secondary">Producción audiovisual que expone el plan estratégico de la Facultad de Ingeniería de la UNNE.</h5>
                <div class="ratio ratio-16x9 mt-3 mb-5">
                <iframe src="https://www.youtube.com/embed/tgrgcRuvTzc?si=PT1MT_5D9mQ-fJJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
        </div>

        {/*FIN 4 videos */}


    </div>

  </Container>


)

}

export default Multimedia