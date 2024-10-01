import { Link } from "react-router-dom";
import Masktexed from "../components/MaskTexed/MaskTexed";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import Hangman from "../components/Hangman/Hangman";
import { wordContext } from "../context/wordContext";
import useWordStore from "../stores/wordStore";
function PlayGame(){
    
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const {text} = useParams()

    // const { state } = useLocation();

    // const { word } = useContext(wordContext);

    const { wordList , word} = useWordStore();

    const [ guessedLetters , setguessedLetters] = useState([]);

    const [step , useStep] = useState(0);
    
    function handleLetterClick(letter){

        if(word?.toUpperCase().includes(letter)){
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
            <h1> Play Game  </h1>  

            {/* {wordList.map((wordObjec) => (
                <li key={wordObjec.id}>{wordObjec.wordValue}</li>
            ))} */}

            {wordList.map((word) => {
                return <li key={word.id}>{word.wordValue}</li>
            })}


            {word && (
                <>
                    <Masktexed text={word}  guessedLetters={guessedLetters}></Masktexed>
                    <div>
                        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
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