import './App.css';

import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import ListRenderer from './components/ListRenderer';
import ConditionalRenderer from './components/ConditionalRenderer';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const personName = "João";
  const [userName] = useState("Maria");
  const [message, setMessage] = useState("");

  const handleMessageState = (msg) =>
  {
    setMessage(msg);
  }

  const cars = [
    {id: 1, brand:"Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand:"KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand:"Ferrari", color: "Amarela", newCar: false, km: 234},
  ];

  function showMessage()
  {
     console.log('Executando função do componente pai !')
  };

  const pessoasDesafioQuatro = [
    {id: 1, name:"Jefferson", age: 35, job: "dev"},
    {id: 2, name:"Renato", age: 22, job: "Professor"},
    {id: 3, name:"Pedro", age: 16, job: "Estudante"},
  ];

  return (
    <div className="App">
      <h1>Seção 3 - Avançando em React</h1>

      {/*Imagem em public o acesso é direto*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData/>
      <ListRenderer/> 
      <ConditionalRenderer/>
      {/*Props */}
      <ShowUserName name={personName}/>
      <ShowUserName name={userName}/>
      {/*Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/*Reutilização de componentes */}
      <CarDetails brand="ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="fiat" km={4500} color="Branco" newCar={false}/>

      {/*Reaproveitamento com loop */}
      {cars.map((car) => (
         <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}

      {/*Utilizando Fragment */}
      <Fragment/>

      {/*Utilizando Children props */}
      <Container myValue="Testing">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="Testing 2">
        <h5>H2</h5>
      </Container>

      {/*Utilizando função como props */}
      <ExecuteFunction myFunction={showMessage}/>

      {/*Utilizando Satate lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessageState}/>

      {/*Desafio 4 */}
      <h1>Desafio 4</h1>
      {pessoasDesafioQuatro.map((pessoa) => (
        <UserDetails key={pessoa.id} name={pessoa.name} age={pessoa.age} job={pessoa.job}/>
      ))}

    </div>
  );
}

export default App;
