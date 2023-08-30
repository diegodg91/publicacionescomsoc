// import ListContainer from "../components/ListContainer";
import Search from "../components/SearchComponent/Search";



const Buscador = () => {

    return(
        <>
        <section className="container main_content mb-5">
        <h1 className="mt-5 pb-3 fw-bold text-secondary text-uppercase border-bottom border-2 border-secondary">Buscar publicaciones</h1>
        <Search />

        </section>
        </>
        
        

    )
}

export default Buscador;