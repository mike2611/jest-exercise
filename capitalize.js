 function capitalize(string) {
    arrStr = [...string];
    arrStr[0] = arrStr[0].toUpperCase();
    return arrStr.join("");
 }

 module.exports = capitalize;