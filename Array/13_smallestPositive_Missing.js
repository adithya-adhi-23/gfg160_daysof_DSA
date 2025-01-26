missingNumber(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        while (arr[i] >= 1 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
            
            [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]];
        }
    }
    
   
    for (let i = 1; i <= n; i++) {
        if (i !== arr[i - 1]) return i;
    }
    
    
    return n + 1;
}

