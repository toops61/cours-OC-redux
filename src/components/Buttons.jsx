import React from 'react'
import { useDispatch } from 'react-redux'
import { playPauseReducer, pointReducer } from '../redux';

export default function Buttons() {

    const dispatch = useDispatch();

  return (
    <div className='buttons-container'>
        <button onClick={() => dispatch(pointReducer('player1'))}>Point Joueur 1</button>
        <button>Point Joueur 2</button>
        <button>Remettre à zéro</button>
        <button onClick={() => dispatch(playPauseReducer)}>Pause / Reprendre</button>
    </div>
  )
}
