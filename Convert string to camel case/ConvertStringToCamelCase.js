function toCamelCase(str){
    let str1 = str.split(/[_-]/);
  
    var newStr =str1[0];

    for (let i=1;i<str1.length;i++){
        newStr += str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
  return newStr;

}
console.log(toCamelCase("str_The_Lower_case"));
