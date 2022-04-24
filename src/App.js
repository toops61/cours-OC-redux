
import { useSelector } from 'react-redux';
import './App.css';
import Buttons from './components/Buttons';
import Jeu from './components/Jeu';
import Score from './components/Score';
import Sets from './components/Sets';

function App() {

  const score = useSelector(state => state.score);

  return (
    <div className="App">
    <header>
      <h1>Tennis score</h1>
    </header>
    <main>
      {score.winner !== null && 
      <div className="winner">
        <h2>Le gagnant est <span className='flashing'>{score.winner}</span></h2>
        {score.winner === 'player1' ? <p>avec {score.setPlayer1} sets à {score.setPlayer2}</p> : 
        <p>avec {score.setPlayer2} sets à {score.setPlayer1}</p>}
      </div>}
      {score.winner === null && <>
        <Jeu />
        <Score />
      </>}
      {score.sets.length > 0 && <Sets />}
      <Buttons />
      {!score.playing && <h2 className='flashing'>Le jeu est en pause</h2>}
    </main>
    </div>
  );
}

export default App;
