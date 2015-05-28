function processData(input) {
    
    read(input);
   
    var numberOfTest = parseInt(readLine());
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
        
        var number = readLine(),
            numberInt = parseInt(number),
            result = 0;
        
        for(var j = 0, lengthJ = number.length; j < lengthJ; j++){
            
            var digit = parseInt(number[j]);
            
            if((digit !== 0) && (numberInt % digit === 0)){
                result++;
            }
        }
        
        console.log(result);
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
