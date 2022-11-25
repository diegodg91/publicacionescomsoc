import { useState, useEffect } from "react";
import { getData } from "../Data/FakeApi";
import ItemList from "./ItemList";
import Container from 'react-bootstrap/Container';
import Loader from "./Loader/Loader";
import { useParams } from "react-router-dom";
const ListContainer = () => {

    const [listDocuments, setListDocuments] = useState([]);
    const [load, setLoad] = useState(false);
    
    const {categoria} = useParams();
    

    useEffect(()=>{
        setLoad(true)
        getData
        .then((res)=> {
            if(!categoria){
                setListDocuments(res)
            }else{
                setListDocuments(res.filter((doc)=> doc.categoria === categoria))
            }
        })
        
        .catch((error) => console.log(error))
        .finally(()=> setLoad(false))
    }, [categoria])
    
    console.log(listDocuments, categoria);

    return(
        <>
        <Container>
        
        {load ? <Loader/> : <ItemList listDocuments={listDocuments} />}
        
        
        </Container>
        </>
        
    )
}

export  default ListContainer