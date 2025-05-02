import './App.css';
import CarDetails from './component/CarDetails';

function App() {

  const carros = [
    {id: 1, marca: "VolksWagen", cor:"Vermelho", ano: "2021"},
    {id: 2, marca: "Chevrolet", cor:"Preto", ano: "2020"},
    {id: 3, marca: "Fiat Uno", cor:"Azul", ano: "2005"},
  ]

  return (
    <div className="App">
      <h1 className="app-title">Desafio 5</h1>
      {carros.map((carro) => (
        <CarDetails marca={carro.marca} cor={carro.cor} ano={carro.ano}/>
      ))}
    </div>
  );
}

export default App;
