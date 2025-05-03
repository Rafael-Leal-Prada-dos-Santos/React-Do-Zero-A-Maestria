import "./End.css"

const End = ({restartGame}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={restartGame}>Reiniciar Jogo</button>
    </div>
  )
}

export default End