const LEAF_PRINT = "*";
const SPACE_PRINT = "_";
const TRUNK_PRINT = "#";
const HEIGHT_TRUNK = 2;

function print_tree(leaf_length, total_length) {

    let center_index = (total_length - 1) / 2;

    let line = "";

    if (leaf_length == 1) {
        for (let i = 0; i < total_length; i++) {
            if (i == center_index) {
                line += LEAF_PRINT;
            } else {
                line += SPACE_PRINT;
            }
        }
    } else {
        let side_expansion = (leaf_length - 1) / 2;

        let left_expansion_index = center_index - side_expansion;

        let right_expansion_index = center_index + side_expansion;

        for (let i = 0; i < total_length; i++) {
            if (i < left_expansion_index || i > right_expansion_index) {
                line += SPACE_PRINT;
            } else {
                line += LEAF_PRINT;
            }
        }
    }

    return line;
}

function print_trunk(total_length) {

    let center_index = (total_length - 1) / 2;

    let line = "";

    for (let j = 0; j < HEIGHT_TRUNK; j++) {
        for (let i = 0; i < total_length; i++) {
            if (i == center_index) {
                line += TRUNK_PRINT;
            } else {
                line += SPACE_PRINT;
            }
        }

        if (j < 1) {
            line += "\n";
        }
    }

    return line;
}

function createXmasTree(height) {
    let tree = "";

    let tree_bottom_size = 1 + (height - 1) * 2; // equation to obtain size of the tree's bottom

    let actual_tree_size = 1;

    // tree's branchs

    for (let i = 0; i < height; i++) {
        tree += print_tree(actual_tree_size, tree_bottom_size);

        tree += "\n";

        actual_tree_size += 2;
    }

    // tree's trunk

    tree += print_trunk(tree_bottom_size);

    console.log(tree);

    return tree;
}

createXmasTree(8);
