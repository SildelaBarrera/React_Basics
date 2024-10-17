import { winner_combos } from "../constants"


export const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras para ver si se cumple alguna con X u O
    for (const combo of winner_combos) {
      const [a, b, c,] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //si no hay ganador devuelve null
    return null
  }

  export const checkEndGame = (newBoard) => {  //función que revisa si hay un empate si no hay huecos libres en el tablero
    return newBoard.every((square) => square != null)
  }