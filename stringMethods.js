
function stringLength(string) {
    if (string.length < 1 || string.length > 10) {
        throw new Error('Fail: The string length should be more than 1 and least than 11');
    }
    return string.length;
}

function reverseString(string) {
    return [...string].reverse().join("");
}

module.exports =  {
    stringLength,
    reverseString
}