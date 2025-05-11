import './App.css';

import {useState, useEffect} from "react";

//4- Custom Hook
import { useFetch } from './hooks/useFecth';

const urlBase = "http://localhost:3000/products"

function App() {

  // const [products, setProducts] = useState([]);
  
   //4- Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(urlBase);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

 




  //aula 1 - Resgatando dados
  // useEffect(()=>{

  //   async function fetchData() {
  //     const res = await fetch(urlBase);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // },[])

  //2- Adicção de produtos
  const handleSubmit = async (e) => {
      e.preventDefault();

      const product = {
        //Quando o nome das propriedades equivalem a um variavel já criada
        //com useState não é necessário fazer name=name e etc. Só colocar o 
        //nome da variável
        name,
        price        
      }

      // const res = await fetch(urlBase, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "applicaion/json"
      //   },
      //   body: JSON.stringify(product)
      // });


      // const addedProduct = await res.json();

      // // 3 - Carregamento dinâmico
      // setProducts((previousProducts) => [
      //   ...previousProducts,
      //   addedProduct
      // ])

      //5 Refatorando POST
      httpConfig(product, "POST")

      setName("");
      setPrice("");
      
  }


  const handleRemove =  (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - LOADING */}
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
        {items && items.map((item) =>(
                <li key={item.id}>{item.name} - R$ {item.price} <button onClick={() => handleRemove(item.id)}>Deletar</button></li>
              ))}
        </ul>
      )}
      
      {/* {products.map((product) =>(
        <li key={product.id}>{product.name} - R$ {product.price}</li>
      ))} */}

      
      
      
      <div className="add-product">
        <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preço:
              <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/* 7 - STATE DE LOADING NO POST */}
            {loading && (<input type="submit" disabled value="Aguarde"></input>)}
            {!loading && (<input type="submit" value="Criar"></input>)}
           
        </form>
      </div>
    </div>
  );
}

export default App;
