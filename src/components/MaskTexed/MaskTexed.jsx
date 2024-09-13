import {getMaskedString} from "./MaskingUtility";

// return these letter who is guessed as a letter and other who is not guessed return as a underscore
function Masktexed ( {text , guessedLetters}){

    const maskedString = getMaskedString( text , guessedLetters);

    return (
        <> 
            {maskedString.map((letter , index) => {
                return (
                    <>
                        <span key={index} className="mx-1">
                            {letter}
                        </span>
                    </>
                );
            })}
        </>
    );
}   

export default Masktexed;