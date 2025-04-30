import './App.css';

import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import ListRenderer from './components/ListRenderer';

function App() {
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
    </div>
  );
}

export default App;
