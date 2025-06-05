// import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter";



// 4 - Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";



const Home = () => {

  // const {counter} = useContext(CounterContext);

  const {counter} = useCounterContext();

  //5 - Context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - Alterando state complexo
  const setTitleColor = (color) => {
    dispatch({type: color});
  }
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter/>
      {/* Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home