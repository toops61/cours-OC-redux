import { useDispatch, useSelector } from 'react-redux';
import { playPauseReducer, pointReducer, resetReducer } from '../redux';

export default function Buttons() {

    const dispatch = useDispatch();
    
    const gameIsPlaying = useSelector(state => state.score.playing);

  return (
    <div className='buttons-container'>
    {gameIsPlaying && <>
        <button onClick={() => dispatch(pointReducer('player1'))}>Point Joueur 1</button>
        <button onClick={() => dispatch(pointReducer('player2'))}>Point Joueur 2</button>
        <button onClick={() => dispatch(resetReducer())}>Remettre à zéro</button>
    </>}
        <button onClick={() => dispatch(playPauseReducer())}><p className={gameIsPlaying ? '' : 'flashing'}>{gameIsPlaying ? "Pause" : "Reprendre"}</p></button>
    </div>
  )
}
