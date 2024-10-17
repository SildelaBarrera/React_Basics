import { useState } from 'react'
import { Square } from './components/Square'
import { turns } from './constants.js'
import { checkWinner } from './logic/board.jsx'
import { checkEndGame } from './logic/board.jsx'
import { WinnerModal} from './components/WinnerModal.jsx'
import confetti from 'canvas-confetti'

import './App.css'


function App() {
  
  //Primer estado para el tablero y que se vayan actualizando las posiciones:
  // (entre paréntesis va el punto de partida, con lo que se empieza):
  //const [board, setBoard] = useState(Array(9).fill(null))
  
//Como vamos a querer recuperar lo que hay guardado en el localStorage usamos el estado en una función:
  const [board, setBoard] = useState (() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) 
  
  //Otro estado para organizar los turnos:
  //const [turn, setTurn]= useState(turns.X)
  //Al igual que antes, 1º miramos si está guardado en el localStorage el turno, sino empiza X:
  const [turn, setTurn]= useState(() => {
    
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
  })

  //Otro estado para saber el ganador:
  const [winner, setWinner] = useState(null)  //null: no hay ganador, false: empate

  //Por último reseteamos todos los valores a los iniciales:
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)

    //Cuando reseteamos el juego 'Empezar de cero' hay que borrar lo guardado:
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    //para no actualizar la posición si ya hay algo en ella:
    if (board[index] || winner) return
    
    //actualizar el tablero:
    const newBoard =[...board]
    newBoard[index] = turn // este turno podrá ser X u O
    setBoard(newBoard)
    //*Se crea un nuevo board porque los estados son INMUTABLES, no debemos trabajar sobre ellos
    //por ello con el spread operator hemos creado una copia superficial. Si queremos hacer una copia profunda: structuredClone(board)
    
    //cambiar turno:
    const newTurn = turn === turns.X ? turns.O : turns.X  //esto dice que el nuevo turno, si el anterior 'turn' es X, será O, y sino pues será X
    setTurn(newTurn)

    //tras cada turno guardamos el avance de la partida:
    window.localStorage.setItem('board', JSON.stringify(newBoard) )
    window.localStorage.setItem('turn', newTurn )

    //revisar, siempre que actualicemos, si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner) 
    } else if (checkEndGame(newBoard)){
      setWinner(false)  //esto significa 'Empate'
    }
  }

  return (
    <main className="body">
      <div className="board">
        <h1>TRES EN RAYA</h1> 
        <h3> Versión Halloween</h3>
        <button className='button' onClick={resetGame}>Empezar de cero</button>
        
        {/* sección para el juego: */}
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard} 
                >
                  {square}
                </Square>
            )
          })
        }
        </section>

        {/* sección para los turnos: */}
        <section className="turn">
          <Square isSelected={turn === turns.X} > {turns.X} </Square>
          <Square isSelected={turn === turns.O} > {turns.O} </Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner}> </WinnerModal>

        
      </div>
    </main>
  )
}
    
export default App
