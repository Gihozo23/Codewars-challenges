function smaller(nums) {
    let count = 0;
    const result = [];
    for(let i = 0; i < nums.length; i++){
        for (let j = i+1 ; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count++
            }
        }
        result.push(count);
        count = 0;
        
    }
    return result
  }
console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 0]))