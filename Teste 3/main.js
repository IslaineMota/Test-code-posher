const stringArray = ["arara", "jabuticaba", "asa", "caminhao"];

const reverseStringArray = stringArray.map((string) => {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed
});

const verifyPalindromes = reverseStringArray.map((reverseString) => {
    const resultBoolean = stringArray.includes(reverseString);
    return resultBoolean
});

console.log(verifyPalindromes);

