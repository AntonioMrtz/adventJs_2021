function decodeNumbers(symbols) {

    let return_number=0;

    const numbers = {
        ".": 1,
        ",": 5,
        ":": 10,
        ";": 50,
        "!": 100,
    };

    const value = {
        
        ".":0,
        ",":1,
        ":":2,
        ";":3,
        "!":4,
    }

    for(let char=0;char<symbols.length;char++){

        if(!symbols[char] in numbers){

            return Number.NaN;

        }

        else if(char+1==symbols.length){

            return_number+=numbers[symbols[char]];
        }

        else if(symbols[char+1] in numbers && value[symbols[char+1]]-value[symbols[char]]>0){

            return_number-=numbers[symbols[char]];

        }

        else{

            return_number+=numbers[symbols[char]];
        }


    }

    console.log(return_number);
    return return_number;

}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
