import React, { useState } from 'react';
import useSound from 'use-sound'
import cheerSound from '../static/sfx/Kids Cheer Light .mp3'
import booSound from '../static/sfx/Crowd Disappointment.mp3'
import victorySound from '../static/sfx/applause2.wav'
// import magicalSound from '../static/sfx/Magical Twinkle 1.mp3'

import './styles/scoreboard.css'



const ScoreBoard = () => {
    const gameModes = {
        "Catan Base Game":
        {
            winningScore: 10,
            startingScore: 2
        },
        "Knights & Cities": 
        {
        winningScore: 13,
        startingScore: 3
        }
    }
    const [gameMode, setGameMode] = useState("Catan Base Game")
    const [winningScore, setWinningScore] = useState(10)
    const [jasonScore, setJasonScore] = useState(0)
    const [amyScore, setAmyScore] = useState(0)
    const [kennedyScore, setKennedyScore] = useState(0)

    const [playVictorySound] = useSound(victorySound, {
        volume: .8,
        interrupt: true
    })
    const [playCheer] = useSound(cheerSound, {
        volume: .5,
        interrupt: true
    })

    const [playBoo] = useSound(booSound)
    // const [playMagical] = useSound(magicalSound)


    function handleAddPointJason() {
        if (jasonScore < winningScore){
            playCheer()
            setJasonScore(jasonScore + 1)
        }
        else {
            playVictorySound()
        }    
    }
    function handleAddPointAmy() {
        if (amyScore < winningScore){
        playCheer()
        setAmyScore(amyScore + 1)
        }
        else {
            playVictorySound()
        }  
    }
    function handleAddPointKennedy() {
        if (kennedyScore < winningScore){
        playCheer()
        setKennedyScore(kennedyScore + 1)
        }
        else {
            playVictorySound()
        }  
    }
    function handleRemovePointJason() {
        if (jasonScore > 0) {

            playBoo()
            setJasonScore(jasonScore - 1)
        }
    }
    function handleRemovePointAmy() {
        if (amyScore > 0) {
            playBoo()
            setAmyScore(amyScore - 1)
        }
    }
    function handleRemovePointKennedy() {
        if (kennedyScore > 0) {
            playBoo()
            setKennedyScore(kennedyScore - 1)
        }
    }
    function handleResetAllScore() {
        setJasonScore(gameModes[gameMode].startingScore)
        setKennedyScore(gameModes[gameMode].startingScore)
        setAmyScore(gameModes[gameMode].startingScore)

    }
    function handleChangeGameMode(e) {
        const selectedGameMode = e.target.value
        setGameMode(selectedGameMode)
        setWinningScore(gameModes[selectedGameMode].winningScore)
        setJasonScore(gameModes[gameMode].startingScore)
        setKennedyScore(gameModes[gameMode].startingScore)
        setAmyScore(gameModes[gameMode].startingScore)

    }

    return (
        <div >
            <div>
                <select
                    className="gamemode-select"
                    onChange={handleChangeGameMode}
                    style={{fontSize:'26px', margin:"20px 0 -10px", height:"50px"}}
                >
                    <option>{gameMode}</option>
                    {Object.keys(gameModes).map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
                <p>Winning Score: {winningScore} Victory Points</p>
            </div>
            <div className="scoreboard">

                <div className='player-area'>
                    <div className='player-area-top'>
                        <p>Jason</p>
                    </div>
                    <div className="player-area-mid">
                        <button onClick={handleAddPointJason}>+ 1</button>
                        <div className="player-score" style={winningScore - jasonScore < 3 ? { color: 'red' } : { color: 'greenyellow' }}>{jasonScore}</div>
                        <button onClick={handleRemovePointJason}>- 1</button>
                    </div>
                </div>
                <div className='player-area'>
                    <div className='player-area-top'>
                        <p>Amy</p>
                    </div>
                    <div className="player-area-mid">
                        <button onClick={handleAddPointAmy}>+ 1</button>
                        <div className="player-score" style={winningScore - amyScore < 3 ? { color: 'red' } : { color: 'greenyellow' }}>{amyScore}</div>
                        <button onClick={handleRemovePointAmy}>- 1</button>
                    </div>
                </div>
                <div className='player-area'>
                    <div className='player-area-top'>
                        <p>Kennedy</p>
                    </div>
                    <div className="player-area-mid">
                        <button onClick={handleAddPointKennedy}>+ 1</button>
                        <div className="player-score" style={winningScore - kennedyScore < 3 ? { color: 'red' } : { color: 'greenyellow' }}>{kennedyScore}</div>
                        <button onClick={handleRemovePointKennedy}>- 1</button>
                    </div>
                </div>
            </div>
            <div className="scoreboard-controls">
                <button onClick={handleResetAllScore}> Reset Scores</button>
            </div>
        </div>
    );
}

export default ScoreBoard;
