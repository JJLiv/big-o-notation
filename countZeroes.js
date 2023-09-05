function countZeroes(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
      
    
    while ( leftIdx <= rightIdx ) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if( ((arr[leftIdx] === 1 ) && (arr[leftIdx + 1] === 0))) {
            return (arr.length - (leftIdx + 1));
        } 
        else if ( (arr[middleIdx] === 1) && (arr[middleIdx + 1] === 0)) {
            return (arr.length - (middleIdx + 1))
        }
        else if (middleVal === 0) {
            rightIdx = (middleIdx - 1)
        } 
        else if (middleVal === 1) {
            leftIdx = (middleIdx + 1)
        }
        else { return 0}
    }
}
countZeroes([1,1,1,1,0,0,0,0,0]);
countZeroes([1,1,1,1,0,0,0,0,0,0,0,0]);


function sortedFrequency(arr) {
    
}