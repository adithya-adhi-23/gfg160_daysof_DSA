class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Code Here
        const n = arr.length;
        let largest = -1;
        let seclargest = -1;
        for(let i = 0;i < n;i++){
            if(arr[i] > largest){
                seclargest = largest;
                largest = arr[i];
            }
            else if(arr[i] < largest && arr[i] > seclargest){
                seclargest = arr[i];
        }
    }
        return seclargest;
   
    }
        
}
