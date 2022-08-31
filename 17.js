function countPackages(carriers, carrierID) {
    
    var total_carriers=0; 

    function recursive_finding(carriers,carrier){

        total_carriers+=carrier[1];

        if(carrier[2]!==undefined){

            for(sub_carrier_name of carrier[2]){

                let sub_carrier=find_carrier(carriers,sub_carrier_name);

                recursive_finding(carriers,sub_carrier);

            }


        }

    }

    function find_carrier(carriers,carrierID){

        let carrier;

        for(let i in carriers){

            if(carriers[i][0]==carrierID){
    
                carrier=carriers[i];
    
            }
        }

        return carrier;
    }


    let carrier=find_carrier(carriers,carrierID);

    recursive_finding(carriers,carrier);

    console.log(total_carriers);
    
    return total_carriers;
}

const carriers = [
    ["dapelu", 5, ["midu", "jelowing"]],
    ["midu", 2, []],
    ["jelowing", 2, []],
];

countPackages(carriers, "dapelu"); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
    ["lolivier", 8, ["camila", "jesuspoleo"]],
    ["camila", 5, ["sergiomartinez", "conchaasensio"]],
    ["jesuspoleo", 4, []],
    ["sergiomartinez", 4, []],
    ["conchaasensio", 3, ["facundocapua", "faviola"]],
    ["facundocapua", 2, []],
    ["faviola", 1, []],
];

countPackages(carriers2, "camila"); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
