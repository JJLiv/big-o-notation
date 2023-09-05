function  findFloor(arr, x, start = 0, end = arr.length -1) {
    let mid = Math.floor((start + end) / 2);
    
    if (arr[start] > x) return -1;
    if (x >= arr[end]) return arr[end];
    if (arr[mid] === x) return x;

    if( x > arr[start] && arr[mid-1] <= x && arr[mid] > x) {
        return arr[mid -1];
    }

    if ( arr[mid] > x) { 
        return findFloor(arr, x, start, mid - 1);
    }
    return findFloor(arr, x, mid + 1, end);

}
findFloor([1,2,8,10,10,12,19], 20)