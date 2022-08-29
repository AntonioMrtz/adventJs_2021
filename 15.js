function checkSledJump(heights){

    let actual_movement;

    const movement={

        UP:0,
        DOWN:1,
    }


    for(let i=1;i<heights.length;i++){


        if(heights[i]==heights[i-1]){

            return false;

        }

        else if(heights[i]>heights[i-1]){

            actual_movement=movement.UP;

        }

        else if(heights[i]<heights[i-1]){

            actual_movement=movement.DOWN;

        }



    }

    if(actual_movement===movement.UP){

        return false;
    }


    return true;
    
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
