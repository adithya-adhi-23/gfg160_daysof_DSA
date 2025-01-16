class Solution {
    /**
    * @param number[] prices

    * @returns number
    */
    maximumProfit(prices) {
        // code here
        let totalProfit = 0;
        
        for(let i = 0 ; i < prices.length - 1 ;i++){
            if(prices[i] < prices[i+1])
            totalProfit += prices[i+1]-prices[i]
        }
     return totalProfit;
    }
}
