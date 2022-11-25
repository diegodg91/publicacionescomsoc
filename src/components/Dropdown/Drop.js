import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

const Drop = () => {
  return (
    <DropdownButton title="Categorias">
      <Dropdown.Item>
      <Link to='/categoria/multimedia'>Multimedia</Link>
      </Dropdown.Item>

      <Dropdown.Item>
      <Link to='/categoria/investigaciones'>Investigaciones</Link>
      </Dropdown.Item>

      <Dropdown.Item>
      <Link to='/categoria/multimedia'>otro</Link>
      </Dropdown.Item>
      
    </DropdownButton>
  );
}

export default Drop;