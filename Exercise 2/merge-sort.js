function mergeSort(array){
    //base case
    if (array.length === 1) {
        return array
    }
    else {
        //Split the array as evenly as possible
        let left = array.slice(0, array.length/2)
        let right = array.slice(array.length/2)

        //Select the left subarray and split it as evenly as possible
        console.log(mergeSort(left))

        //Select the right subarray and split it as evenly as possible
        console.log(mergeSort(right))

        //Sort the arrays
        Sort(left, right)

        
       // let newArray = [...left, ...right]
        //return console.log(newArray)
    }

}

function Sort(left, right){
    let newArray = []; //The sorted elements will go here
    while (left.length && right.length) {
        if(left[0] < right[0]) {
            newArray.push(left.shift()); 
            //let result = left.concat(right)
            return console.log(newArray)
        }
        else { 
            newArray.push(right.shift())
            //let result = right.concat(left)
            return console.log(newArray)
        } 

    }
    return [...newArray, ...left, ...right];
}



let array = [2, 6, 7, 4, 5, 1, 3, 8]
mergeSort(array)