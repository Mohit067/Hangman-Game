import { Link , useSearchParams , useParams , useLocation} from "react-router-dom";
import Masktexed from "../components/MaskTexed/MaskTexed";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../components/Hangman/Hangman";
function PlayGame(){
    
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const {text} = useParams()

    const { state } = useLocation();

    const [ guessedLetters , setguessedLetters] = useState([]);

    const [step , useStep] = useState(0);
    
    function handleLetterClick(letter){

        if(state?.wordSelected?.toUpperCase().includes(letter)){
            console.log('correct');
        }
        else{
            console.log('wrong');
            useStep(step+1);
        }

        setguessedLetters([...guessedLetters , letter])

    }


    return (
        <>
            <h1>Play Game  </h1>

            {state?.wordSelected && (
                <>
                    <Masktexed text={state.wordSelected}  guessedLetters={guessedLetters}></Masktexed>
                    <div>
                        <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                    </div>

                    <div>
                        <Hangman step={step}/>
                    </div>
                </>
            )}
            <Link to="/">Home</Link>
            <Link to='/start' className="text-blue-400">Start Game</Link>
        </>
    );
}

export default PlayGame;