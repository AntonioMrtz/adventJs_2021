const carta = "  bici  bicibici coche     a_  balón _playstation bici  coche peluche _a  aa  a ";

function listGifts(letter) {

    let ocurrences = {}

    letter=letter.trim()
    let cartaItems = letter.split(" ");
    
    for (let item of cartaItems){


        if(!item.startsWith("_") && item){

            if(item in ocurrences){

                ocurrences[item]+=1;
            }


            else{

                ocurrences[item]=1;

            }
        }
    }



    return ocurrences;

}

const regalos = listGifts(carta);
console.log(regalos);
