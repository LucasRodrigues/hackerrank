function processData(input) {

    read(input);
    
    var numberOfTest = readLine();
    
    for(var i = 0, length = numberOfTest; i < length; i++){
        
        var lines = readLine(),
            sizeA = Math.round(lines / 2),
            sizeB = lines - sizeA;
        
        console.log(sizeA * sizeB);        
    }
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
