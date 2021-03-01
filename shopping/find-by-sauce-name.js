// kind of weird that this (and create-dropdown) seem to be the only functions that gets its own special file
export function findBySauceName(array, sauceName) {
    for (let sauce of array) {
        if (sauce.name === sauceName){
            return sauce;
        }
    }
}