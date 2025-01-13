class Solution {
    pushZerosToEnd(arr) {
        // code here
        let n = arr.length;
        const temp = new Array(n);
        let  j = 0;
        for(let i = 0;i < n;i++){
            if(arr[i] != 0){
                temp[j] = arr[i];
                j++;
            }
       } 
        for(let i = j;i < n;i++){
          
                temp[i] = 0;
               
        }
        for(let i = 0;i < n;i++){
          
                arr[i] = temp[i];
               
        }
        
        return arr;
    }
}
