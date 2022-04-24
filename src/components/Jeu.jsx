import { useSelector } from "react-redux";

export default function Jeu() {

    const score = useSelector(state => state.score);

  return (
    <section>
        <div className="jeu-container">
            <div className="jeu-player">
                <p>
                    Joueur 1 :
                </p>
                <p>
                    {score.jeuPlayer1 === 0 ? 'Aucun jeu gagné' : score.jeuPlayer1}
                </p>
            </div>
            <div className="jeu-player">
                <p>
                    Joueur 2 :
                </p>
                <p>
                    {score.jeuPlayer2 === 0 ? 'Aucun jeu gagné' : score.jeuPlayer2}
                </p>
            </div>
        </div>
    </section>
  )
}
