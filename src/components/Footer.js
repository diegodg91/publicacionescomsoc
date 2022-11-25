import { Link } from "react-router-dom";

const Footer = () => {
    return(
      <div className="container-fluid bg-dark">

        <footer className="pt-5 d-flex flex-column flex-md-row justify-content-center">
        
          <div className="row g-4 container text-center">

              <div className="col-sm-12 col-md-4 text-light d-flex flex-column">
                <span className="fw-semibold text-uppercase text-secondary mb-2">Secciones</span>
                    <Link className='text-uppercase text-decoration-none' to='/buscador'>Buscador</Link> 
                    <Link className='text-uppercase text-decoration-none' to='/publicaciones'>Publicaciones</Link>       
                    <Link className='text-uppercase text-decoration-none' to='/acercade'>Acerca de</Link>   
              </div>

                <div className="col-sm-12 col-md-4">
                <img src="/img/pcs-logo-azul.png" alt="psc" style={{width: "120px", height: "auto"}}/>
                <p className='mt-2 text-uppercase text-primary'>copyright 2022</p>
                </div>

              <div className="col-sm-12 col-md-4">
              
              <p className='fw-semibold text-uppercase text-primary'>Email: <br/>
              <span className='text-secondary'>contacto@psc.com.ar</span>
              </p>
              <p className='fw-semibold text-uppercase text-primary'>Telefono: <br/>
              <span className='text-secondary text-end'>+543794******</span>
              </p>
              
              </div>

        </div>
       


        </footer>
        
      </div>
    )
}

export default Footer