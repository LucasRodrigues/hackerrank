function processData(input) {
    
    read(input);
    
    var input = readLine().split(" "),
        bootleCount = parseInt(input[0]),
        numberOfFills = parseInt(input[1]),
        quantity = 0;
    
    for(var i = 0, lengthI = numberOfFills; i < lengthI; i++){
     
        var inputFill = readLine().split(" "),
            bootleStartIndex = parseFloat(inputFill[0]),
            bootleEndIndex = parseFloat(inputFill[1]),
            qtFill = parseFloat(inputFill[2]);
        
        quantity += ((bootleEndIndex - bootleStartIndex + 1.0) * qtFill);   
    }    
    
    console.log(Math.floor(quantity / bootleCount));
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
