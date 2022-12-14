import Item from './Item';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';


const ItemList = ({listDocuments}) => {

    return(
        <Container>
         <Row className='mt-5 mb-5'>
                {listDocuments.map((document) => <Item key={document.id} document={document} />)}

         </Row>

         </Container>
            
    )
}

export default ItemList