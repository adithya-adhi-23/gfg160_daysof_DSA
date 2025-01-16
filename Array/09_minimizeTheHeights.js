class Solution {
    // Function to get the minimum difference between the heights.
    getMinDiff(arr, k) {
        // your code here
      
        let diff;
        let n = arr.length;
        
        arr.sort((a,b)=> a-b);
        diff = arr[n-1] - arr[0];
        for(let i = 1; i < n ;i++){
            if(arr[i] < k) continue;
            
            let minHeight = Math.min(arr[0] + k,arr[i] - k);
            let maxHeight = Math.max(arr[n-1]-k,arr[i-1] + k)
       
            diff = Math.min(diff,maxHeight - minHeight);
            }      
        return diff;
    }
}
