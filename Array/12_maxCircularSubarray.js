class Solution {
  // Function to find the maximum circular subarray sum
  circularSubarraySum(arr) {
    let totalSum = 0;
    let currMinSum = 0, currMaxSum = 0;
    let maxSum = arr[0], minSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
      currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
      maxSum = Math.max(currMaxSum, maxSum);

      currMinSum = Math.min(currMinSum + arr[i], arr[i]);
      minSum = Math.min(currMinSum, minSum);

      totalSum += arr[i];
    }

    const normalSum = maxSum;
    const circularSum = totalSum - minSum;

    
    if (minSum === totalSum) return normalSum;

    return Math.max(normalSum, circularSum);
  }
}



