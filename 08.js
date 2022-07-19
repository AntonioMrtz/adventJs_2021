function maxProfit(prices) {

    let max_win=0

    for(let i=0;i<prices.length;i++){

        for(let j=i;j<prices.length;j++){

            if(prices[j]-prices[i]>max_win){

                max_win=prices[j]-prices[i]

            }
            
        }
    }

    if(max_win<1){

        return -1
    }

    //console.log(max_win)
    return max_win
    
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)