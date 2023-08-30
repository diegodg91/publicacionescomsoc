
import { Link } from "react-router-dom";
import Publis from "../components/Publis";


const Home = () => {

    return(
        <section className="container main__content mb-5">
        <div className="row">
            <div className="col-sm-12 col-md-6 my-auto justify-content-center">
                <h1 className="fw-bold text-secondary text-uppercase mt-5">Bienvenido!</h1>
                <p className="text-dark fs-5 lh-md mt-3 mb-5">Publicaciones COMSOC es un sitio donde vas a encontrar trabajos finales, realizados por alumnos/as egresados/as de la UNNE</p>
                <Link className="text-secondary fs-5 p-3 border rounded-3 border-secondary" to='/buscador' style={{textDecoration: "none"}}><i class="bi bi-search"></i> Buscar publicaciones</Link>
            </div>

            <div className="col-sm-12 col-md-6 mt-5">
                <img src="/img/principal.jpg" alt="egresados PSC" className="img-main"/>
            </div>
        </div>
        
        <Publis/>

        <div className="row align-items-center mt-5 pt-5 pb-5 border-top">
            <div className="col-sm-12 col-md-8">
            <img src="/img/student.jpg" alt="multimeda PSC" className="img-main"/>
            </div>

            <div className="col-sm-12 col-md-4">
            <h2 className="fw-bold text-uppercase text-secondary">espacio multimedia</h2>
            <p className="fw-semibold fs-5">Streaming, videos, audios y mas</p>
            
            </div>
        </div>
        </section>
        
        

    )
}

export default Home;