function getMinJump(obstacles) {
    
    obstacles.sort((a,b) => a-b).reverse();

    let max_jump=obstacles[0]+1;
    let min_jump=max_jump;

    for(let actual_jump =1;actual_jump<max_jump;actual_jump++){

        if(!obstacles.includes(actual_jump) && actual_jump<min_jump){

            let has_multiples=0;
            
            for(let item of obstacles){
                
                if(item % actual_jump == 0){
    
                    has_multiples=1;
    
    
                }

            }

            if(has_multiples!=1){

                min_jump=actual_jump;
            }

        }
    }

    console.log(min_jump)
    return min_jump;;


}


const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles1 = [2, 4, 6, 8, 10]
getMinJump(obstacles1) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/