import React, { useState } from "react";

function Game(){

  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningSquare = (square) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for(let [a, b, c] of lines){
      if(square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
    
  }
    const handleClick = (index) => {
      if(square[index] || winner) return;
      const newSquare = square. slice();
      newSquare[index] = xIsNext ? "X" : "O"
      const newWinner = winningSquare(newSquare)
      setSquare(newSquare)
      setXIsNext(!xIsNext)
      if(newWinner) {
        setWinner(newWinner)
      } else if (!newSquare.includes(null)) {
        setWinner("Draw")
      }
    }
  const resetGame = () => {
    setSquare(Array(9).fill(null));
    setXIsNext(true)
    setWinner(null)
  }

return(
     <div style={{alignItems: "center",display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <h2>Tic Tac Toe</h2>
        <div style={{display: "grid" , gridTemplateColumns: "repeat(3, 60px)", gap: "12px" }}>
          {square.map((value, index) => (
            <button 
            className="square"
             key={index}
             onClick={() => (handleClick(index))}
              style={{
               width: "60px",
               height: "60px",
               fontSize: "24px",
                color: "teal",
                border: "2px solid teal",
                borderRadius: "10px",
                fontSize: "1.5rem"
            }}>
               {value}
                </button>
          ))}
        </div>

        <button id="reset" onClick={resetGame} style={{marginTop: "10px", backgroundColor: "teal",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "2rem",
          margin: "20px",
          padding: "10px 20px"
          
        }}>
          reset
          </button>
          <div style={{marginTop: "10px", fontSize: "1.5rem"}}>
            {winner 
            ? winner === "Draw"
          ? "Result: Draw"
        : `Winner: Congratulation 🎉 ${winner}`
      :`Next Player: ${xIsNext ? "X" : "O"}`}
          </div>
     </div>

 )
}
export default Game;