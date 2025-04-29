import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

//Imagem
import logo from './logo.svg';

//styles /CSS
import './App.css';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos de React</h1>
     <FirstComponent/>
     <TemplateExpressions />
     <MyComponent/>
     <Events/>
     <Challenge/>
    </div>
  );
}

export default App;
