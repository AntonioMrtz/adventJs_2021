function contains(store, product) {
    let isContained = false;

    for (let elements in store) {
        if (typeof store[elements] === "object") {
            isContained = contains(store[elements], product);
        } else if (store[elements] == product) {
            return true;
        }
    }

    return isContained;
}

const almacen = {
    estanteria1: {
        cajon1: {
            producto1: "coca-cola",
            producto2: "fanta",
            producto3: "sprite",
        },
    },
    estanteria2: {
        cajon1: "vacio",
        cajon2: {
            producto1: "pantalones",
            producto2: "camiseta", // <- ¡Está aquí!
        },
    },
};

console.log(contains(almacen, "camiseta"));
