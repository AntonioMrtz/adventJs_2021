function wrapGifts(gifts) {

    let total_lines = gifts.length;

    if(total_lines==0){

        return [];
    }


    let line_length=Array.from(gifts[0]).length*2+2;

    let number_items=Array.from(gifts[0]).length;

    let present_gifts=[];

    let border_line="";

    for(let i =0;i<line_length;i++){

        border_line+="*";

    }

    present_gifts[0]=border_line;

    let line=""; 


    for(let item=0;item<gifts.length;item++){

        line="*"+gifts[item]+"*";

        present_gifts[item+1]=line;


    }

    present_gifts[total_lines+1]=border_line;

    console.log(present_gifts);
        

    return present_gifts;
}

wrapGifts(["📷", "⚽️"]);
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"]);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"]);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
