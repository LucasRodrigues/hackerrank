function processData(input) {

    read(input);
    
    var numberOfTest = parseInt(readLine());
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
        
        var cicles = parseInt(readLine()),
            heigth = 1;
        
        for(var j = 0, lengthJ = cicles; j < lengthJ; j++){
            
            if(j % 2 === 0){
                heigth *= 2;
            }else{
                heigth++;
            }            
        }        
        
        console.log(heigth);
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
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
