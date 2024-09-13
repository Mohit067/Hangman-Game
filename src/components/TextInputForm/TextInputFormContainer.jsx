import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType, setInputType] = useState("password"); // state variable
    const [value, setValue] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event){
        event.preventDefault("submit");
        console.log("form submitted");
        if(value){
            // setTimeout(() => {
            //     navigate(`/play/` , {state : {wordSelected : value}}); // state object mai kuch bhi de skte hai yaha hmne ek object diya hai ham string number kuch bhi de skte h
            // }, 1000);
            navigate(`/play/` , {state : {wordSelected : value}});
        }
    }

    function handleTextInputChange(event){
        console.log("text input change")
        console.log(event.target.value)
        setValue(event.target.value);
    }

    function handleShowHideClick(){
        console.log("show/hide button clicked")
        if(inputType === "password"){
            setInputType("text")
        } else {
            setInputType("password")
        }
    }
    return(
        <TextInputForm
            inputType={inputType}
            handleFormSubmit = {handleFormSubmit}
            handleTextInputChange = {handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    );
}

export default TextInputFormContainer