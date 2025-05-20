export default function GameResults({hasWon}) {
  return(
    <div>
      <p>{hasWon ? "You Won!" : "You lost..."}</p>
    </div>
  )
}