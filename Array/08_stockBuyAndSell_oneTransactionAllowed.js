class Solution {
    // Function to find the maximum profit.
    maximumProfit(prices) {
        // your code here
        let n = prices.length;
        let min = prices[0];
        let max = 0;
        for (let i = 1;i < n;i++){
            
             if(min > prices[i])
                 min = prices[i];
             else {
                 
                let profit = prices[i] - min;
                max = Math.max(max,profit);
                
             }
        }
        return max;
    
    }
}
