import React from 'react';
import { useDispatch } from 'react-redux';

export default function Score() {

    const dispatch = useDispatch();

  return (
    <div className='score-container'>
        <p>Le score est : player1 - player2</p>
    </div>
  )
}
