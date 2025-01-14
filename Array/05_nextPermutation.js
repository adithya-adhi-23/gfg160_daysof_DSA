class Solution {
    nextPermutation(arr) {
        // code here
        let n = arr.length;
        let pivot = -1;
        for(let i = n-2;i >= 0;i--){
            if(arr[i] < arr[i+1]){
                pivot = i;
                break;
            }
        }
        for(let i = n-1 ;i > pivot; i--){
            if(arr[pivot] < arr[i]){
                [arr[i],arr[pivot]] = [arr[pivot],arr[i]];
                break;
            }
        }
    
        let left = pivot+1;
        let right = n-1;
        while(left < right){
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++;
            right--;
        }
        
