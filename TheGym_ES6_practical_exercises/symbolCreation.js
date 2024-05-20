// Symbolic Secrets: You're building a secure configuration system. 
// Create a function secureConfig(config) that takes an object config and uses a Symbol as
//  a key to store a private property named apiKey. Return the modified config object.

let secureConfig=(config)=>{
    let sym=Symbol();
    config[sym]=config.apiKey;
    delete config.apiKey;
    return config;
}
let config1={
    apiKey: 1234,
    apiUser:"me"
}
console.log(secureConfig(config1));