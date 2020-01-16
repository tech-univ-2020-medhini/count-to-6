const obj1 = { a:1, b:4}
const obj2 = {}
let keysarr = Object.keys(obj1)
let valuesarr = Object.values(obj1)
for(let i=0;i<keysarr.length;i++){
    obj2[keysarr[i]] = valuesarr[i]
}
console.log(obj1,obj2);