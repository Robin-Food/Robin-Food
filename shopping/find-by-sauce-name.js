export function findBySauceName(array, sauceName) {
    for (let sauce of array) {
        if (sauce.name === sauceName){
            return sauce;
        }
    }
}