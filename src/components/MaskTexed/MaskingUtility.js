//helper file here we written algorithmic content
/**
 * 
 * @param {the word which is given as a input and is expected to be guessed} originalWord 
 * @param {Letters which guessed by users already} guessedLetter 
 * 
 * Example : original letter ==> HUMBLE
 * guessed letter = 'H' 'M' 'E'
 * 
 * return --> H_M__E   
 */ 
export function getMaskedString(originalWord, guessedLetter){
    guessedLetter = guessedLetter.map(Letter => Letter.toUpperCase()); //conver all charater to uppercase letter

    const guessedLetterSet = new Set(guessedLetter);

    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char)){
            return char;
        }
        else {
            return '_';
        }
    })

    return result;
}

// export default getMaskedString;