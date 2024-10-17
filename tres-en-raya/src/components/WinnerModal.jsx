 import { Square } from './Square.jsx'
 
{/* sección para el ganador: */}

export function WinnerModal ({winner, resetGame}) {

    if (winner === null) return null

    const winnerText = winner === false ? '¡ OH !  EMPATE' : '¡ HA GANADO... !' 
    return (
      
        
            <section className = "winner">
            <div className = "text">
                <h2> {winnerText} </h2>
                <header className ="win">
                {winner && <Square> {winner} </Square>} 
                </header>
            
            </div>
            <footer>
                <button className='buttonModal' onClick={resetGame}>Jugar de nuevo</button>
                </footer>
            </section>
            
        
    )
}