import { Link } from "react-router-dom";

const Footer = () => {
    return(
      <div className="bg-dark">

        <footer className="pt-5 pb-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
        
          <div className="row g-3 align-items-start justify-content-center">

          <div className="col-sm-12 col-md-4 col-lg-4">
                <img src="/img/logoPSC-azul.svg" alt="psc" style={{width: "116px", height: "auto"}}/>
                <p className='mt-2 text-uppercase text-secondary parrafo-doc'>copyright 2022</p>
                </div>

              <div className="col-sm-12 col-md-4 text-light d-flex flex-column text-start">
                <span className="text-primary">Secciones</span>
                    <Link className='text-decoration-none pb-2' to='/buscador'>Buscador</Link> 
                    <Link className='text-decoration-none pb-2' to='/publicaciones'>Publicaciones</Link>       
                    <Link className='text-decoration-none pb-2' to='/acercade'>Acerca de</Link>   
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 text-start">
              
              <p className='text-primary'>Email: <br/>
              <span className='text-info-footer'>publicacionescomsoc1@gmail.com</span>
              </p>
              <p className='text-primary'>Telefono: <br/>
              <span className='text-info-footer'>+543794759141</span>
              </p>
              
              </div>

              

        </div>
       


        </footer>
        
      </div>
    )
}

export default Footer