function arrayDiff(a, b) {
    for (let el of b){
   a=a.filter((element)=> element!==el)
      }
    return a;
    }