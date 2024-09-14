import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { useEffect, useState } from "react";
function Home(){

    const [word , setWord] = useState('');

    async function fetchWord(){
        const response = await fetch("http://localhost:3000/words");//custom object
        const data = await response.json();// convert json object 
        console.log(data);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);

    }

    useEffect(()=>{
        fetchWord();
    },[])
    return (
        <>
            <Link to="/play" state = {{wordSelected : word}}>
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