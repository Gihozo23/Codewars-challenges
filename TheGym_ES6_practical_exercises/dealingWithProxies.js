// Proxy Power: Data validation is crucial. Write a function createValidationProxy(obj)
//  that takes an object and returns a proxy that validates any attempt to set a property value. 
//  If the value is invalid (e.g., not a number for a numeric property), throw an error.
function createValidationProxy(obj) {
    // Proxy handler with a set trap
    const handler = {
        set(target, property, value) {
            // Validate the value for numeric properties
            if (typeof target[property] === 'number' && typeof value !== 'number') {
                throw new TypeError(`Property ${property} must be a number`);
            }
            // Perform the assignment if the value is valid
            target[property] = value;
            return true; // Indicate success
        }
    };
    
    // Create and return the proxy
    return new Proxy(obj, handler);
}
let obj ={
    a: 1
}
obj.a=2;
console.log(createValidationProxy(obj));
