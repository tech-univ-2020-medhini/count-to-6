let args = [];
for(let i=2;i<process.argv.length;i++) {
    args.push(process.argv[i])
}
console.log("The minimum of ["+args+"] is "+Math.min(...args))