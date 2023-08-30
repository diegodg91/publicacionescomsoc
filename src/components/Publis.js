
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

const Publis = () => {

    return(
        <div className="mt-5 mb-5">

<hr></hr>
    <div className='pb-5'>
    <h2 className='mt-5 mb-2 text-uppercase text-secondary fw-bold'>Categorias</h2>
    <p className='lh-sm mb-5'>Estos son los diferentes temas que tratan los egresados/as</p>
    <Link className='text-secondary border border-secondary rounded-3 p-3' to='/publicaciones'style={{textDecoration: "none"}}>Ver publicaciones <i class="bi bi-arrow-right"></i></Link>
    </div>
    
    <Row>
        <Stack gap={4} className="flex-xs-column d-flex flex-md-column flex-lg-row">
        <Col sm={12} md={true} lg={4}>
            <article className='d-flex flex-row justify-content-center align-items-center w-auto border border-light rounded'>
                    <img src='/img/caratulas/ic.jpg' alt='investigaciones cientificas' className='w-50 d-inline-block'/>
                    <span className='ps-2 fw-semibold'>Investigaciones cientificas</span> 
            </article>
        </Col>
        <Col sm={12} md={true} lg={4}>
                <article className='d-flex flex-row justify-content-center align-items-center w-auto border border-light rounded'>
                    <img src='/img/caratulas/idi.jpg' alt='informes de intervencion' className='w-50 d-inline-block'/>
                    <span className='ps-2 fw-semibold'>Informes de intervencion</span> 
                </article>
        </Col>
        <Col sm={12} md={true} lg={4}>
            <article className='d-flex flex-row justify-content-center align-items-center w-auto border border-light rounded'>
                <img src='/img/caratulas/cem.jpg' alt='contenido teorico multimedial' className='w-50 d-inline-block'/>
                <span className='ps-2 fw-semibold'>Contenido teorico multimedial</span>
             </article>
        </Col>
        </Stack>
    </Row>
    <Row className="mt-2">
        <Stack gap={4} className="flex-xs-column d-flex flex-md-column flex-lg-row">
            <Col sm={12} md={true} lg={4}>
                <article className='d-flex flex-row justify-content-center align-items-center w-auto border border-light rounded'>
                        <img src='/img/caratulas/prc.jpg' alt='producciones comunicacionales' className='w-50 d-inline-block'/>
                        <span className='ps-2 fw-semibold'>Producciones Comunicacionales</span>
                        
                </article>
            </Col>
            <Col sm={12} md={true} lg={4}>
                <article className='d-flex flex-row align-items-center w-auto border border-light rounded'>
                <img src='/img/caratulas/et.jpg' alt='ensayos teoricos' className='w-50'/>
                <span className='ps-2 fw-semibold'>Ensayos teoricos</span>
                </article>
                
            </Col>
        </Stack>
    </Row>
   
 
    
    </div>
    )
}

export default Publis;
