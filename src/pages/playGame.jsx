import { Link , useSearchParams , useParams , useLocation} from "react-router-dom";
import Masktexed from "../components/MaskTexed/MaskTexed";
function PlayGame(){
    
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const {text} = useParams()

    const { state } = useLocation();


    return (
        <>
            <h1>Play Game { state.wordSelected } </h1>

            <Masktexed text={state.wordSelected}  guessedLetters={[]}/>

            <Link to='/start' className="text-blue-400">Start Game</Link>
        </>
    );
}

export default PlayGame;