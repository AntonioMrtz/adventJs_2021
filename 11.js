function shouldBuyFidelity(times) {

    const TICKET_PRICE=12;
    const FIDELITY=250;

    // calculate normal

    let normal_price = TICKET_PRICE*times;


    // calculate fidelity

    let fidelity_price=FIDELITY;

    for(let i=1;i<=times;i++){

        fidelity_price+=(Math.pow(0.75,i)*TICKET_PRICE)

    }


    if(normal_price<fidelity_price){

        return false;
    }

    return true;
}


console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad