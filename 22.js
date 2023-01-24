function countDecorations(bigTree,flag) {

    //var decorations=0;

    function countDecorations_recursive(bigTree,flag){

        let count=0;

        count+=bigTree.value


        if(bigTree.left!=null){
            
            count+=countDecorations_recursive(bigTree.left,1);   

        }

        if(bigTree.right!=null){


            count+=countDecorations_recursive(bigTree.right,1);  

        }

        return count;


    }


    let decorations=countDecorations_recursive(bigTree,0)
    
    console.log(decorations)

    return decorations;
}


// tenemos el árbol en forma de objeto
const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    },
    right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    }
}

/* Gráficamente sería así:
    1
  /   \
 2     3
 
1 + 2 + 3 = 6
*/

countDecorations(tree) // 6

const bigTree = {
    value: 1,
    left: {
        value: 5,
        left: {
            value: 7,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        value: 6,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: {
            value: 1,
            left: null,
            right: null
        }
    }
}

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

countDecorations(bigTree) // 28