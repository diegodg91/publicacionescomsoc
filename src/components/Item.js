
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

const Item = ({document}) => {

    const {titulo, url, image} = document;

    return(
    
      <Col sm={12} md={true} lg={4} className="border border-light rounded p-4">
      <article className='mt-5 d-flex flex-row justify-content-center align-items-center w-auto'>
              <img src={image} alt='categoria' className='w-50 d-inline-block'/>
              <p className='ps-3'>{titulo}</p>   
      </article>
      <Card.Link target="_blank" href={url} className="btn btn-outline-secondary mt-4 d-block text-center fw-semibold text-uppercase">Ver Documento</Card.Link>
      
  </Col>
    
    
  );

}

export default Item