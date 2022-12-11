function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++;
        } else {
            result.push(arr1[i])
            i++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
}

// let one = [1,3,4,5];
// let two = [2,4,6,8];
console.log(mergeSort([4, 20, 12, 10, 7, 9]))
// module.exports = { merge, mergeSort};