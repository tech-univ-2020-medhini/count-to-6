let args = [];
for(let i=2;i<process.argv.length;i++) {
    args.push(process.argv[i])
}

module.exports = function average(...args) {
    let sum = 0
    let num = 0
    args.forEach(function(p){
        sum += p
        num ++
    })
    return sum/num
};
