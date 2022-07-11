function isValid(letter) {
    
    letter = letter.trim();

    let openParenthesis = 0;
    let nestedCharacters = 0;

    for (let char of letter) {
        if (char == "(") {
            if (nestedCharacters == 1) {
                return false;
            }

            openParenthesis = 1;
        } else if (char == ")") {
            if (nestedCharacters == 0) {
                return false;
            }

            nestedCharacters = 0;
            openParenthesis = 0;
        } else {
            if (char == "[" || char == "]" || char == "{" || char == "}") {
                return false;
            }

            if (openParenthesis == 1) {
                nestedCharacters += 1;
            }
        }
    }

    return openParenthesis == 0;
}

console.log(isValid(""));
