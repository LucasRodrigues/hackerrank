function processData(input) {
    read(input);
    
    var min = parseInt(readLine()),
        max = parseInt(readLine()),
        result = "";
    
    for(var i = min, lengthI = max; i <= lengthI; i++){
     
        if(i === 1){
            result += 1 + " ";
        }else if(isKaprekar(i)){
            result += i + " ";
        }
    }
    
    if(result === ""){
        console.log("INVALID RANGE")
    }else{
        console.log(result);
    }
} 

function isKaprekar(number){
    
    var numberPow2 = Math.pow(number,2).toString(),
        halfLength = Math.floor(numberPow2.length/2),
        firstHalfNumberPow2 = parseInt(numberPow2.substring(0,halfLength )),
        lastHalfNumberPow2 = parseInt(numberPow2.substring(halfLength));
   
    return (firstHalfNumberPow2 + lastHalfNumberPow2) === number;
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