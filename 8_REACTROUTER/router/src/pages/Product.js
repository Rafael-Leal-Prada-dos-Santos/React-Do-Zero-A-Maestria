import { Link, useParams } from "react-router-dom"

import { useFetch } from "../hooks/useFetch";



const Product = () => {

    const { id } = useParams();

    //Carregamento dado Individual
    const urlProduto = `http://localhost:3000/products/`+id;

    const {data : product, loading, error} = useFetch(urlProduto);
    
    console.log(urlProduto)

  return (
    <>
        {/* Aula 1 de rotas dinamicas */}
        {/* <p>ID do Produto : { id }</p> */}

        {error && <p>Houve um erro</p>}
        {loading && <p>Carregando dados, por favor aguarde...</p>}
        {!loading && (
            <div>
              {product && (
                <div>
                      <h1>{product.name}</h1>
                      <p>{product.price}</p>
                {/**Nested route */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
              )}
                
            </div>
        )}
    </>
  )
}

export default Product