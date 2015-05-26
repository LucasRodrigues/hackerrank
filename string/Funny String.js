
function processData(input) {

    read(input);
    
    var numberOfStrings = parseInt(readLine());
    
    var result = "";
    
    for(var i = 0; i < numberOfStrings;i++){
                
        var text = readLine(),
            reverseText = text.split("").reverse().join(""),
            isFunny = true;
        for(var j = 1, length = text.length; j < length; j++){
            var diffText = Math.abs(getAscii(text[j]) - getAscii(text[j-1]));
            var diffReverseText = Math.abs(getAscii(reverseText[j]) - getAscii(reverseText[j-1]));
            
            if(diffText !== diffReverseText){
                isFunny = false;
                break;
            }
        }
        
        result += isFunny ? "Funny\n" : "Not Funny\n";
    }
    
    console.log(result);
} 

function getAscii(letter){
    return letter.charCodeAt(0);
}

var inputRead = [];
var line = 0;
function read(input){
    inputRead = input.split("\n");
}
function readLine(){
    var lineText = inputRead[line];
    line++;
    
    return lineText;
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
