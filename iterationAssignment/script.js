const myLetters = ["create", "random", "arrays", "numbers", "encampment"];

// const letterMapper = (letter) => {
//     return letter[0];
// };

const letterDeconstructor = ([element]) => {
    return element;
};

let myWord = myLetters.map(letterDeconstructor);

const wordMaker = (wordPlaceholder, currentLetter) => {
    return wordPlaceholder + currentLetter;
};

let finalWord = myWord.reduce(wordMaker);

console.log(finalWord);