class Solution {
    // Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr) {
        // code here
        let res = arr[0];
        let maxEnding = arr[0];
        
        for(let i = 1;i < arr.length;i++){
            maxEnding = Math.max(maxEnding + arr[i],arr[i]);
            
            res = Math.max(res,maxEnding);
        }
        return res;
        
    }
}
