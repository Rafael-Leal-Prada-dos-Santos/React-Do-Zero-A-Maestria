import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react'
import Title from './components/Title';
function App() {

  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = true;
  return (
    <div className="App">
      {/*CSS GLOBAL*/}
      <h1>React com Css</h1>
      {/*CSS DE COMPONENTE*/}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
      {/*CSS INLINE*/}
      <p style={{color:"blue", padding: "25px", borderTop:"2px solid red"}}>Este parágrafo foi estilizado de forma inline</p>
      {/*CSS INLINE DINÂMICO*/}
      <h2 style={n < 10 ? ({color:"purple"}):({color:"pink"})}>
        CSS DINAMICO
      </h2>
      <h2 style={n > 10 ? ({color:"purple"}):({color:"pink"})}>
        CSS DINAMICO
      </h2>
      <h2 style={name === "Matheus"? {color:"green"}:null}>
        CSS DINAMICO
      </h2>
       {/*CLASSE DINÂMICO*/}
       <h2 className={redTitle ? "red-title": "title"}>Este título vai ter classe dinâmica</h2>
       {/*CSS MODULES*/}
       <Title/>
    </div>
  );
}

export default App;
