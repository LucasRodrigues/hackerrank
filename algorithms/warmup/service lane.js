function processData(input) {
    read(input);
    
    var input1 = readLine().split(" "),
        freeWayLength = parseInt(input1[0]),
        numberOfTest = parseInt(input1[1]),
        sizes = readLine().split(" ").map(function(a){return parseInt(a);});
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
        
        var input2 = readLine().split(" "),
            startIndex = parseInt(input2[0]),
            endIndex = parseInt(input2[1]),
            min;
        
        for(var j = startIndex, lengthJ = endIndex; j <= lengthJ; j++){
            
            if(j === startIndex){
                min = sizes[j];
            }
            
            if(min > sizes[j]){
                min = sizes[j];
            }
        }
        
        console.log(min);
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
