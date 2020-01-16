module.exports = function makeImportant(stringArg,numArg, transform = x => x.length) {
    if (numArg == undefined){
        numArg = transform(stringArg)
    }
    for(let i=0;i<numArg;i++){
        stringArg = stringArg + "!"
    }
    return(stringArg)
};