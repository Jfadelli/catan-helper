import logo from './static/sheep.png';
import './App.css';

import TurnTimer from './components/TurnTimer';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <body className="App-body">
        <ScoreBoard />
        <TurnTimer />
      </body>
    </div>
  );
}

export default App;
