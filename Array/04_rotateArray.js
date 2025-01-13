class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
        let n = arr.length;
        d = d%n;
        let temp = new Array(n);
        for(let i = 0 ;i < n-d ;i++){
            temp[i] = arr[d+i];
        }
        for(let i = 0;i < d;i++){
            temp[n-d+i] = arr[i];
        }
        for(let i = 0;i < n;i++) {
            arr[i] = temp[i];
        }
    }
}
