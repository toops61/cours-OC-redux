import { useSelector } from "react-redux"

export default function Sets() {
    
    const array = useSelector(state => state.score.sets);
    //const score = useSelector(state => state.score);
    const setsArray = [...array];

    const Set = (props) => {
        
        return <p>{props.children}</p>
    }

  return (
    <div className="sets-container">
        {setsArray.map(set => 
           <Set key={set.id}>{set}</Set>
        )
        }
    </div>
  )
}
