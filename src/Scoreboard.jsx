export default function Scoreboard({score, restart}) {
  return(
    <>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <button onClick={restart}>Restart</button>
      </div>
    </>
  )
}