function filterOddEven() {
    let i = 1;
    while (i <= 20){
        if (i % 2===0){
            console.log(`${i} This number is even`);
        }
        if (i % 2!==0){
            console.log(`${i} This number is odd`);
        }
        i++;
    }
    
  }
  filterOddEven();