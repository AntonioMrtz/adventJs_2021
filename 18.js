
function fixFiles(files) {

    let fixed_files = [];

    let files_count={};

    for(let file of files){

        if(!fixed_files.includes(file)){

            files_count[file]=0;
            fixed_files.push(file);
        }
        else{

            files_count[file]+=1;
            fixed_files.push(file+"("+ files_count[file]+")");

        }
    }

    console.log(fixed_files)

    return fixed_files;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']