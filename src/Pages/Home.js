
import { Link } from "react-router-dom";
import Publis from "../components/Publis";

const Home = () => {

    return(
        <section className="container main__content mb-5">
        <div className="row">
            <div className="col-sm-12 col-md-6 my-auto justify-content-center">
                <h1 className="fw-bold text-secondary text-uppercase mt-5">Bienvenido!</h1>
                <p className="text-dark lh-sm">Publicaciones COMSOC es un sitio donde vas a encontrar trabajos finales, realizados por alumnos egresados de la UNNE</p>
                <Link className="text-dark fw-semibold" to='/buscador' style={{textDecoration: "none"}}>Conoce más</Link>
            </div>

            <div className="col-sm-12 col-md-6 mt-5">
                <img src="/img/egresados.jpg" alt="egresados PSC" className="img-main"/>
            </div>
        </div>
        <Publis/>

        <div className="row">
            <div className="col-sm-12 col-md-8">
            <img src="/img/student.jpg" alt="egresados PSC" className="img-main"/>
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