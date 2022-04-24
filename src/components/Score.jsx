import React from 'react';
import { useSelector } from 'react-redux';

export default function Score() {

    const score = useSelector(state => state.score)

  return (
    <div className='score-container'>
        { score.advantage === null ? ((score.player1 === score.player2 && score.player1 === 40) ?
          <p>Egalité</p> :
          <p>Le score est : {score.player1} - {score.player2}</p>) :
          (<p>avantage {score.advantage}</p>)
          }
    </div>
  )
}
