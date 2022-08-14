function missingReindeer(ids) {

    let max_number=Math.max(...ids);

    for(let i=0;i<max_number;i++){

        if(!ids.includes(i)){

            console.log(i);
            return i;
        }
        
    }

    console.log(max_number+1)

    return max_number+1;

}



missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)