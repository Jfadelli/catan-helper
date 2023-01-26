import React, { useState, useEffect } from 'react';
import './styles/scoreboard.css'
const players = ["Jason", "Amy", "Kennedy"]

const ScoreBoard = () => {
    const [scoreBoardState, setScoreBoardState] = useState(
        [{"Jason":2},{"Amy":2},{"Kennedy":2}]
    ) 
    function handleAddPoint(event) {
        // event.preventDefault()
        console.log(event)
        setScoreBoardState(...scoreBoardState)
    }
    console.log(scoreBoardState)
    return (
        <div className="scoreboard">
            {scoreBoardState.map((player) => (
                
                
                <div className='player-area'>

                    <div className='player-stats'>
                        <p>{Object.keys(player)}</p>
                        <p>Victory Points</p>
                        <h1>{Object.values(player)}</h1>
                    </div>
                    <div className='player-controls'>
                        <button onClick={handleAddPoint(Object.keys(player))}>+ 1</button>
                        <button>- 1</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ScoreBoard;
