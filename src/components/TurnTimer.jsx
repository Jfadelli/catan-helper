import { useState, useEffect } from "react"
import useSound from "use-sound"
import magicalSound from '../static/sfx/Magical Twinkle 1.mp3'

import './styles/turntimer.css'

export default function TurnTimer(props) {
    const [seconds, setSeconds] = useState(3)
    const [visualization, setVisualization] = useState(10)
    const [playPause, setPlayPause] = useState("pause")
    const [resetCache, setResetCache] = useState(seconds)
    const [mute, toggleMute] = useState(false)

    const timerOptions = [3, 30, 45, 60, 90]

    const timerBarColor = "orange"

    const [playMagical] = useSound(magicalSound)

    function handlePlayPause() {
        if (playPause === "pause") {
            setPlayPause("play")
        } else {
            setPlayPause("pause")
        }
    }

    function handleSetTimer(event) {
        setPlayPause("pause")
        setSeconds(event.target.value)
        setResetCache(event.target.value)
    }

    function handleReset() {
        setPlayPause("pause")
        setSeconds(resetCache)
    }
    function handleRestart() {
        setPlayPause("play");
        setSeconds(resetCache)
    }

    function handleMute() {
        if (mute === false){
            toggleMute(true)
        } else {
            toggleMute(false)
        }
        console.log(mute) 
    }
    useEffect(() => {
        if (playPause === "play") {
            const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
            
            if(seconds === 0 && mute === false){
                playMagical()
            }
            return () => {
                setVisualization(10)
                clearInterval(timer)
            }
        }
        return;
    }, [seconds, playPause, playMagical, mute]);

    useEffect(() => {
        if (playPause === "play") {
            const timer2 = visualization > 0 && setInterval(() => setVisualization(visualization - 1), 100)
            return () => clearInterval(timer2)

        }
        return;
    }, [visualization, playPause])
    return (

        <div className="timer-container">
            <div className="time-remaining">
                {seconds}
            </div>
            <div className="timer-visualization">

                <div className="timer-bar">

                    <div className="tv-0" style={visualization > .5 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-1" style={visualization > 1 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-2" style={visualization > 2 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-3" style={visualization > 4 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-4" style={visualization > 5 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-5" style={visualization > 6 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-6" style={visualization > 7 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-7" style={visualization > 8 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-8" style={visualization >= 9 ? { backgroundColor: timerBarColor } : null}></div>
                    <div className="tv-9" style={visualization > 9 ? { backgroundColor: timerBarColor } : null}></div>
                </div>






            </div>

            <button
                className="reset-timer"
                onClick={handleReset}>
                reset

            </button>
            <button
                className="play-pause"
                onClick={handlePlayPause}
            >
                {playPause === 'pause'? 'start' :'pause'}
            </button>
            <button onClick={handleRestart}>restart</button>
            <div className="timer-controls">
                <select
                    className="timer-select"
                    onChange={handleSetTimer}
                >
                    <option> Duration</option>
                    {timerOptions.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}


                </select>
                <input type="checkbox" onClick={handleMute}/><label style={{fontVariant:"small-caps"}}>mute timer</label>


            </div>
        </div>
    )
}