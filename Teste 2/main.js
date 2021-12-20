const stringArray = ["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"];

const removeRepeatedStringsSequence = () => {
    let noRepetition = [stringArray[0]];
    for (let i = 1; i < stringArray.length; i++){
    if (stringArray[i] != noRepetition[noRepetition.length-1]) {
        noRepetition.push(stringArray[i]);
    }}
    return noRepetition;
};

console.log(removeRepeatedStringsSequence());
