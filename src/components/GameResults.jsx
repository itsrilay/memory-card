export default function GameResults({hasWon}) {
  return(
    <div>
      <p className="result">{hasWon ? "You Won!" : "You lost..."}</p>
    </div>
  )
}