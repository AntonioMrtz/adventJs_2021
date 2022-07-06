
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


function contarOvejas(ovejas) {

    let filteredOvejas=[]
    
    for (let oveja of ovejas){
  

        if(oveja.name.toLowerCase().includes("a") && oveja.name.toLowerCase().includes("n") && oveja.color=="rojo"){
            
            filteredOvejas.push(oveja)
      }
  
    }
  
  
    return filteredOvejas
}


const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)