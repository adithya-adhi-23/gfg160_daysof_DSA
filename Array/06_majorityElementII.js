class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        // Your code goes here
        let n = arr.length;
        let candidate1 = null;
        let candidate2 = null;
        let count1 = 0;
        let count2 = 0;
        
        for(let num of arr){
            if(candidate1 == num){
                count1++;
            }
            else if(candidate2 == num){
                count2++;
            }
            else if(count1 == 0){
                candidate1 = num;
                count1 = 1;
            }
            else if(count2 == 0){
                candidate2 = num;
                 count2 = 1;
            }
            else
            {
            count1--;
            count2--;
             }
        }
        
        count1 = 0;
        count2 = 0;
        for(let num of arr){
        if(num == candidate1)
            count1++;
        if(num == candidate2)
            count2++;
        }
        
        let res=[];
        if(count1 > n/3)
            res.push(candidate1);
        if(count2 > n/3 && candidate2 != candidate1)
            res.push(candidate2);

        res.sort((a,b)=> a-b);
            return res;
    }
}
