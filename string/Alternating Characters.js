function processData(input) {
    
    read(input);
    
    var numberOfIteractions = parseInt(readLine(input));
    
    var result = "";
    
    for(var i = 0; i < numberOfIteractions; i++){
        
        var text = readLine();
        
        var removeCount = 0;
        for(var j = 0; j < text.length; j++){
            
            if(text[j] == text[j-1]){
               removeCount++;                 
            }           
        }
        
        result += removeCount + "\n";
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
