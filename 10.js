/* using dynamic programming ( coin change problem , always getting the bigger coin possible)*/

function getCoins(change) {


    let type_coins=[50,20,10,5,2,1];


    if(change==0){

        return [0,0,0,0,0,0];
    }

    let min_coins=[0,0,0,0,0,0];

    let total=change;

    
    for(let i=0;i<type_coins.length;i++){ // iterate all types of coins
        
        

        while(total>=type_coins[i]){  // how many of selected coin

            total-=type_coins[i];
           

            min_coins[5-i]+=1
            


        }
    
    }

    console.log(min_coins);
    return min_coins;
}


getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

/*

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos

*/