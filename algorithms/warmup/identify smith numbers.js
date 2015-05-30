function processData(input) {
    read(input);
    
    var number = parseInt(readLine()),  
        numberFactors = prime_factors(number),
        sumNumberDigits = sumDigits(number),
        sumNumberFactors = 0;
    
    numberFactors.map(function(a){sumNumberFactors += sumDigits(a)});    

    console.log(sumNumberDigits === sumNumberFactors ? 1 : 0);
} 

function sumDigits (n){
    
    var total = 0;
    
    n.toString().split("").map(function(a){total+=parseInt(a);});
    
    return total;    
}

function prime_factors(n) {
    var factors = [],
        d = 2;
    
    while (n > 1){
        while (n % d == 0){
            factors.push(d);
            n = n / d;
        }
        d = d + 1;
        if (d*d > n){
            if (n > 1){
                factors.push(n)
            }
            break;
        }
    }
    
    return factors
}

var contentLine = 0;
var content = [];
function read(input){
    content = input.split("\n");
}
function readLine(){
    return content[contentLine++];
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
