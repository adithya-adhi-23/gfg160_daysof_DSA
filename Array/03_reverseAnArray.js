
void reverseArray(int arr[], int n) {
  //code here
 for(int i = 0;i < n/2;i++){
     int temp;
     temp = arr[i];
    arr[i] = arr[n-1-i];
    arr[n-i-1] = temp;
     }
     return arr;
}

