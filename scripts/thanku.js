"use strict";

let otp=Math.floor((Math.random()*1000)+1);
//three methods to get data cookies localstorage and js methods
//used for get method but requires regex and string manipulation
let query=window.location.search;
console.log(typeof(query));
//used for localstorage method


console.log(otp);
