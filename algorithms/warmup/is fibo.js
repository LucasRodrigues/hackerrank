function processData(input) {
    
    read(input);
    
    var numberOfTests = parseInt(readLine());
    
    for(var i = 0, lengthI = numberOfTests; i < lengthI; i++){
        
        var number = parseInt(readLine());
        
        var left = ((5 * Math.pow(number,2)) - 4),       
            rigth = ((5 * Math.pow(number,2)) + 4);
                
        console.log(isSquarePerfect(left) || isSquarePerfect(rigth) ? "IsFibo" : "IsNotFibo"); 
    }
} 

function isSquarePerfect(number){
    
    var squareNumber = Math.sqrt(number);
    
    return squareNumber === parseInt(squareNumber, 10);
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
