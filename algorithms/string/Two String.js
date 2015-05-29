function processData(input) {
   
    read(input);
    
    var numberOfTest = readLine(),
        result = "";
    
    
    for(var i = 0; i < numberOfTest; i++){
        
        var word1 = readLine();
        var word2 = readLine();
        
        var found = false;
        for(var j = 0, length = word1.length; j < length; j++){
            
            if(word2.indexOf(word1[j]) > 0){
                found = true;
                break;
            }
        }
        
        result += (found ? "YES" : "NO") + "\n";        
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
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
