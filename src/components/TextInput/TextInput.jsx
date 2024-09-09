function TextInput({type = "text", label, placeholder = "Enter your text here", onChangeHandler}){

    return (

        <label>
            <span className = "text-gray-700">{label}</span>
            <input 
                type = {type}
                className="px-4 py-2 border broder-gray-500 radius-md w-full"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />

        </label>

    );
}

export default TextInput 