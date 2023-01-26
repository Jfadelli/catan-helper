import React, { useState } from 'react';
import useSound from 'use-sound'
import cheerSound from '../static/sfx/Kids Cheer Light .mp3'
import booSound from '../static/sfx/Crowd Disappointment.mp3'
// import magicalSound from '../static/sfx/Magical Twinkle 1.mp3'
import './styles/scoreboard.css'

const ScoreBoard = () => {
    const [jasonScore, setJasonScore] = useState(0)
    const [amyScore, setAmyScore] = useState(0)
    const [kennedyScore, setKennedyScore] = useState(0)
    

    const [playCheer] = useSound(cheerSound)
    const [playBoo] = useSound(booSound)
    // const [playMagical] = useSound(magicalSound)

    
    function handleAddPointJason() {
        playCheer()
        setJasonScore(jasonScore + 1)
    }
    function handleAddPointAmy() {
        playCheer()
        setAmyScore(amyScore + 1)
    }
    function handleAddPointKennedy() {
        playCheer()
        setKennedyScore(kennedyScore + 1)
    }
    function handleRemovePointJason() {
        playBoo()
        setJasonScore(jasonScore - 1)
    }
    function handleRemovePointAmy() {
        playBoo()
        setAmyScore(amyScore - 1)
    }
    function handleRemovePointKennedy() {
        playBoo()
        setKennedyScore(kennedyScore - 1)
    }
    function handleResetAllScore() {
        setJasonScore(2)
        setKennedyScore(2)
        setAmyScore(2)
    }
    return (
        <div >

            <div className="scoreboard">
                <div className='player-area'>
                    <div className='player-stats'>
                        <p>Jason VP</p>
                        <h1>{jasonScore}</h1>
                    </div>
                    <div className='player-controls'>
                        <button onClick={handleAddPointJason}>+ 1</button>
                        <button onClick={handleRemovePointJason}>- 1</button>
                    </div>
                </div>
                <div className='player-area'>
                    <div className='player-stats'>
                        <p>Amy VP</p>
                        <h1>{amyScore}</h1>
                    </div>
                    <div className='player-controls'>
                        <button onClick={handleAddPointAmy}>+ 1</button>
                        <button onClick={handleRemovePointAmy}>- 1</button>
                    </div>
                </div>
                <div className='player-area'>
                    <div className='player-stats'>
                        <p>Kennedy VP</p>
                        <h1>{kennedyScore}</h1>
                    </div>
                    <div className='player-controls'>
                        <button onClick={handleAddPointKennedy}>+ 1</button>
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
