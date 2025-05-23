export default function Scoreboard({score, restart}) {
  return(
    <>
      <div className="scoreboard">
        <p className="score">Score: {score}</p>
        <button className="restart" onClick={restart}>Restart</button>
      </div>
    </>
  )
}