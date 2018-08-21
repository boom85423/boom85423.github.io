function round_dicimal(x, decimal){
    var size = Math.pow(10, decimal);
    return Math.round(x * size) / size;
}

res = round_dicimal(3.1415678, 4);
console.log(res);