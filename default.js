let args = [];
for(let i=2;i<process.argv.length;i++) {
    args.push(process.argv[i])
}

module.exports = function midpoint(lower = 0, upper = 1) {
    return (lower+upper)/2
};