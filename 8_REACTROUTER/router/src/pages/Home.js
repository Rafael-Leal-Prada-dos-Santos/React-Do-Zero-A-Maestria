import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import "./Home.css"

const Home = () => {

  const url = "http://localhost:3000/products"

   const {data: products, loading, error} = useFetch(url);

  return (
    <div>
        {error && <p>Houve um erro!</p>}
        {loading && <p>Carregando, por favor Aguarde</p>}
        {!loading && (
            <ul className="products">
                { products && products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>R${product.price}</p>
                        <Link to={`/products/${product.id}`}>Detalhes</Link>
                    </li>)) 
                }
            </ul>
        )} 
    </div>
  )
}

export default Home