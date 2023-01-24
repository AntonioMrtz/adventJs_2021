function canMouseEat(direction, game) {

    class Coordenate {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
    }

    let coordenate_mouse;
    let coordenates_foods = [];
    
    for(let x=0;x<game[0].length;x++){

        for(let y=0;y<game.length;y++){

            if(game[y][x]=="*"){

                coordenates_foods.push(new Coordenate(x,y));



            }
            else if(game[y][x]=="m"){

                coordenate_mouse =new Coordenate(x,y)


            }
        
        }
    }

    for(let coordenate_food of coordenates_foods){

        if(direction=="up" && coordenate_mouse.x==coordenate_food.x && coordenate_mouse.y==coordenate_food.y+1)
    
            return true;
        
    
        if(direction=="down" && coordenate_mouse.x==coordenate_food.x && coordenate_mouse.y==coordenate_food.y-1)
    
            return true;
    
        if(direction=="right" && coordenate_mouse.x==coordenate_food.x-1 && coordenate_mouse.y==coordenate_food.y)
            return true;
    
        if(direction=="left" && coordenate_mouse.x==coordenate_food.x+1 && coordenate_mouse.y==coordenate_food.y)
            return true;

    }




    return false
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
]

console.log(canMouseEat('up', room))   // false
console.log(canMouseEat('down', room))   // true
console.log(canMouseEat('right', room))   // false
console.log(canMouseEat('left', room))   // false

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

console.log(canMouseEat('up', room2) )  // false
console.log(canMouseEat('down', room2) )  // false
console.log(canMouseEat('right', room2))   // true
console.log(canMouseEat('left', room2) )  // false