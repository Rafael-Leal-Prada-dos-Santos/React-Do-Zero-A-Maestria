import './App.css';
import MyForm from './component/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Josias", email: "josias@gmail.com", bio: "minha Bio", role:"editor"}}/>
    </div>
  );
}

export default App;
