
import Docus from './Docus';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';


const ItemList = ({listDocuments}) => {

    return(
        <Container>
         <Row className='mt-5 g-3 mb-5'>
                {listDocuments.map((document) => <Docus key={document.id} document={document} />)}

         </Row>

         </Container>
            
    )
}

export default ItemList