class Solution {
    maxProduct(arr) {
        // code here
        let res = arr[0];
        let maxEnding = arr[0];
        let minEnding = arr[0];
        for(let i = 1;i <arr.length;i++){
            if(arr[i] < 0){
                [minEnding,maxEnding] = [maxEnding,minEnding];
            }
            maxEnding = Math.max(maxEnding * arr[i],arr[i]);
            minEnding = Math.min(minEnding*arr[i],arr[i])
            res = Math.max(maxEnding,res);
          
        }
          return res;
    }
}
