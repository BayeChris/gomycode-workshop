function counting(arr) {
    let tab = [];
  
    while (arr.length > 0) {
      let min = arr[0];
  
      for (i = 0; i < arr.length; i++) {
        if (arr[i] <= min) {
          min = arr[i];
          index = i;
        }
      }
  
      arr.splice(index, 1);
  
      tab.push(min);
    }
  
    return tab;
  }