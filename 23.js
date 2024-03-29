function canReconfigure(from, to) {

    
    if(from.length !== to.length)

        return false

    let letter_assignations={}

    for(let i=0;i<from.length;i++){

        if(from[i] in letter_assignations && letter_assignations[from[i]]!=to[i])

            return false

        if(to[i] in letter_assignations && letter_assignations[to[i]]!=from[i])
        
            return false

        letter_assignations[to[i]]=from[i]
    }
    
    return true

}


var from = 'BAL';
var to   = 'LIB';
console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

var from = 'CON';
var to   = 'JUU';
console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

var from = 'MMM';
var to   = 'MID';
console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

var from = 'AA';
var to   = 'MID';
console.log(canReconfigure(from, to)); // false -> no tiene la misma longitud