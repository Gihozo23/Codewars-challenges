// Destructuring Challenge: You're building a user profile system. 
// Create a function extractProfile(user) that takes an object user with properties name, age, city, 
// and occupation (optional). Using destructuring, return a new object containing only the name and
//  city properties.
let extractProfile = (user)=>{
    let {name,city}=user;
    return {name,city};
}
const user = {
    city: 10,
    name: 'orange',
    // getArea: function() {
    //   return Math.PI  *this.radius*  this.radius;
    // },
    // getCircumference: function() {
    //   return 2  *Math.PI*  this.radius;
    // }
  };
  console.log(extractProfile(user))