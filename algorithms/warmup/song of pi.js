function processData(input) {
    read(input);
    
    var numberOfTest = parseInt(readLine());
    
    const pi = "31415926535897932384626433833";
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
        
        var sentence = readLine(),
            numberSentence = "";
                
        sentence.split(" ").map(function(s){ numberSentence += s.length.toString();});

        console.log(pi.indexOf(numberSentence) === 0 ? "It's a pi song." : "It's not a pi song.");        
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
