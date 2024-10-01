import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { useContext, useEffect } from "react";
import { wordContext } from "../context/wordContext";
function Home(){

    const { setWordList , setWord} =  useContext(wordContext);

    async function fetchWord(){
        const response = await fetch("http://localhost:3000/words");//custom object
        const data = await response.json();// convert json object 
        console.log(data);

        setWordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);

    }

    useEffect(()=>{
        fetchWord();
    },[])
    return (
        <>
            <Link to="/play">
                <Button text="Single player Game"></Button>
            </Link>
            <br />
            <Link to="/start">
                <div className="mt-4">
                    <Button text="Multiple player Game" styleType="secondary"></Button>
                </div>
            </Link>
        </>
    );
}

export default Home;