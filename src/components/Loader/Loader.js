import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';


const Loader = () => {
    return(
        <>
        <Row className="justify-content-center">
        <Spinner animation="border" variant='primary' className='mt-5' />
        </Row>
        
        </>
    )
    

}

export default Loader;