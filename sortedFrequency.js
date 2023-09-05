function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if ( firstIdx === -1) return firstIdx;
    let lastIdx = findLast(arr,num);
    return lastIdx - firstIdx + 1;

    
    function findFirst(arr, num, firstIdx = 0, lastIdx = arr.length-1){        
        if (lastIdx >= firstIdx) {
            let midIdx = Math.floor((firstIdx + lastIdx) / 2)
            
            if (midIdx === 0) {return midIdx}
            else if ((num === arr[midIdx]) && arr[midIdx-1] < num) {return midIdx}
            else if (num < arr[midIdx]) {return findFirst(arr, num, firstIdx, midIdx-1)}
            else if (num > arr[midIdx]) {return findFirst(arr, num, midIdx+1, lastIdx)}
        }
        return -1;
    }

    function findLast(arr, num, firstIdx=0, lastIdx = arr.length-1) {
        if (lastIdx >= firstIdx) {
            let midIdx = Math.floor((firstIdx + lastIdx) / 2);
            
            if (midIdx === 0) {return midIdx}
            else if ((num === arr[midIdx]) && arr[midIdx + 1] > num) { return midIdx }
            else if (arr[midIdx] < num) { findLast(arr, num, firstIdx = midIdx+1, lastIdx)}
            else if (arr[midIdx] > num) { findLast(arr, num, firstIdx, lastIdx = midIdx-1)}
        }
        return -1
    }
}

//steps 
// find first instance of num in array
// if none return -1
// find last instance of num
// return last index - first index and add one to accomodate

