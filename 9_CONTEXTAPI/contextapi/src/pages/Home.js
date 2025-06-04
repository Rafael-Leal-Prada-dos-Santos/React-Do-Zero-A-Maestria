// import { useContext } from "react"
// import {CounterContext} from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";


// 4 - Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {

  // const {counter} = useContext(CounterContext);

  const {counter} = useCounterContext();

  //5 - Context mais complexo
  const {color} = useTitleColorContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default Home