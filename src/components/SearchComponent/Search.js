import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { getData } from '../../Data/FakeApi';


const Searcher = () => {

    //setear hooks de estado

    const [docs, setDocs] = useState([]);
    const [search, setSearch] = useState("");

    const datos = getData;

    //funcion de busqueda
    const Buscar = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    //metodo filtrado

    let result = []

    if(!search){
        result = docs
    }else{
        result = docs.filter((ele) => 
        ele.categoria.toLowerCase().includes(search.toLowerCase()) || ele.titulo.toLowerCase().includes(search.toLowerCase()))
    }


    //mostrar datos

    useEffect(()=>{
        datos
        .then((res)=> setDocs(res))
        .catch((error) => console.log(error))
    }, )
    console.log(docs);

   //capturar evento del input (manejador de teclas)

   const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      e.target.blur();
    }
  };


    return(
        <div className="container search-vh">
            <Form className="d-flex mt-5">
                  <Form.Control
                    type="search"
                    name="keywords"
                    placeholder="Busca por titulo o tema"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={Buscar}
                    onKeyDown={handleKeyDown}
                    
                  />
                </Form> 
                       
                            <div className='row justify-space-between mt-5'>
                                {   
                                   
                                    result.map( (doc) => (
                                    <div className='col-sm-12 col-md-4 g-4'>
                                    <div className='card docs__result' key={doc.id}>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{doc.titulo}</h5>
                                             <p className="parrafo-doc pb-2">
                                            {doc.descripcion} <br></br>
                                            <span className='pt-5 fw-bold'>Autor: {doc.autor}</span>
                                        </p>
                                        
                                        <a target="blank" href={doc.url} className="decoration-none border-rounded rounded-2 fw-bold text-secondary">Ver PDF</a>
                                        </div>
                                       
                                    </div>
                                    </div>
                                    
                    
                            
                                ))
                                }
                         
                                </div>
                    
                          
                                

                   
              
        </div>
    )
}

export default Searcher