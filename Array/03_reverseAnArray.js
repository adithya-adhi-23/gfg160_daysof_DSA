

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        // your code here
        let n = arr.length;
        for(let i = 0;i < n/2;i++){
            let temp = arr[i];
            arr[i] = arr[n-1-i];
            arr[n-1-i] = temp;        
            
        }
        return arr;
    }
}

