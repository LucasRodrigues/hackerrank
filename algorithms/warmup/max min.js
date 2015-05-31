"use strict"

function processData(input) {
    
    read(input);
    
    var setCount = parseInt(readLine()),
        subSetCount = parseInt(readLine()),
        set = [];
    
    for(var i = 0, lengthI = setCount; i < lengthI; i++){
     
        set.push(parseInt(readLine()));        
    }
    
    set.sort(function(a, b){return a-b;});
    
    
    var result;
    
    for(var j = 0, lengthJ = setCount - subSetCount; j < setCount; j++){
        
        if(j === 0){
            result = set[j + subSetCount -1] - set[j];
        }else{
            
            var tempResult = set[j + subSetCount -1] - set[j];
            if(tempResult > 0 && tempResult < result){
                result = tempResult;
            }
        }
    }
    
    console.log(result);
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
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});