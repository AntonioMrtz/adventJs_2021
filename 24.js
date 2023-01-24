function checkIsSameTree(treeA, treeB) {


    function checkIsSameTree_recursive(treeA,treeB){

        if(treeA==null && treeB==null)
            return true

        if(treeA!=null && treeB!=null && treeA.value==treeB.value && checkIsSameTree_recursive(treeA.left,treeB.left) && checkIsSameTree_recursive(treeA.right,treeB.right))
            return true;

        return false;


    }

    console.log(checkIsSameTree_recursive(treeA,treeB))

    return checkIsSameTree_recursive(treeA,treeB);
}


const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}


checkIsSameTree(tree, tree2) // false


checkIsSameTree(tree2, tree2) // true