function processData(input) {
   
    read(input);
    
    var numberOfTestCase = readLine();
    
    for(var i = 0, lengthI = numberOfTestCase; i < lengthI; i++){
        
        var money = parseInt(readLine()),
            flavoursCount = readLine(),
            flavours = readLine().split(" ").map(function(a){ return parseInt(a)});
        
        var notFound = true; 
        
        for(var j = 0, lengthJ = flavours.length; j < lengthJ; j++){
            if(notFound){
                for(var k = j + 1, lengthK = flavours.length; k < lengthK; k++){

                    if(flavours[j] + flavours[k] === money){
                        console.log((j + 1) + " " + (k + 1));
                        notFound = false;
                        break;
                    }
                }   
            }
        }        
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
