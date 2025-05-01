import { useState } from "react"

const ConditionalRenderer = () => {

    const [x] = useState(true);

    const [name, setName] = useState("João");
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se X For true, sim</p>}
        {!x && <p>Agora x é falso</p>}
        {name === "João" ? 
        (<div><p>O nome é joão</p></div>)
        :(<div><p>Nome não encontrado</p></div>)}
        <button onClick={() => setName("Matheus")}>Clica aqui</button>
    </div>
  )
}

export default ConditionalRenderer