import { list } from "postcss";
import { create } from 'zustand';
// create function creates a store for us

const useWordStore = create((set) => ({
    wordList: [],
    word: "",
    setWordList: (list) => {
        set((state) => {
            console.log("printing state" , state);
            return{
                ...state,
                wordList: list
            }
        });
    },
    setWord: (newWord) => {
        set((state) => {
            return {
                ...state,
                word: newWord
            }
        });
    }

}));
export default useWordStore;