
let userArray = process.argv.slice(2);
let obj1 = {};
[,obj1.username, obj1.email] = userArray
console.log(obj1);