import React from "react";
import { Card } from 'react-bootstrap';


const Docus = ({document}) => {
    
    const {titulo, url, descripcion, image, autor} = document;

    return(
        <div className="col-sm-12 col-md-6 col-lg-3">

        <article className="border p-3 d-flex flex-column justify-content-center align-items-start">
        <figure>
            <img className="img-fluid" src={image} alt="caratula" />
        </figure>
        <p className="fs-5">{titulo}</p>
        <p className="parrafo-doc">{descripcion}</p>
        <p className="fw-semibold parrafo-doc">Autor/a: {autor}</p>
        <Card.Link target="_blank" href={url} className="btn btn-outline-secondary mt-4 d-block text-center fw-semibold text-uppercase">Ver Documento</Card.Link>
        
        </article>

        </div>
    );
}

export default Docus