function findRotatedIndex(arr, num) {
    // array contains objects where the key is the index in the provided array
    // and the value is the corresponding value in the same array.

    
    let highestNumIdx = getHighestNumIdx(arr, num, start, end);
    findIndex(arr, num, start, end, highestNumIdx);

    

    function getHighestNumIdx(arr, num, start=0, end=(arr.length-1)) {
        let mid = Math.floor((first+end) / 2);
        if (arr[mid] > arr[mid+1]) {return mid}
        else if (arr[mid] < arr[mid-1]){return mid}
        else if ((arr[mid] < arr[mid+1]) && (arr[mid] > arr[mid-1])) { getHighestNumIdx(arr, num, start=mid+1, end)}
    };

    function findIndex(arr, num, start=0, end=arr.length-1, highestNumIdx) {
        if( num === arr[highestNumIdx] ) { return highestNumIdx }
        else if (num > arr[start] && num < arr[highestNumIdx]) {binarySearch(arr, num, start=0, finish=highestNumIdx)}
        else if (num < arr[end] && num < arr[highestNumIdx]) { binarySearch(arr, num, start=highestNumIdx, end)}
    };

    function binarySearch(arr, num, start=0, finish=arr.length-1) {
        let mid = Math.floor((start+finish) / 2);
        if ((num === arr[mid]) || (num === arr[mid-1]) || (num === arr[mid+1])) {return mid}
        else if (num > arr[mid]) { binarySearch(arr, num, start= mid+1, finish)}
        else if (num < arr[mid]) { binarySearch(arr, num, start, finish=mid-1)}
        else return -1;
    };

    
}