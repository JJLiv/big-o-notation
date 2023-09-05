function findRotationCount(arr, low = 0, high = arr.length-1) {
    if (high === low) return low;
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    //check if mid is smallest value;
    if ( mid > low && arr[mid] < arr[mid - 1] ) {
        return mid;
    }

    if ( mid < high && arr[mid] > arr[mid + 1]) {
        return arr[mid+1]
    }

    if (arr[high] > arr[mid]) {
        return findRotationCount(arr, low, mid -1);
    } 
    
    return findRotationCount(arr, mid + 1, high);
}

[4,7,9,1,2]
