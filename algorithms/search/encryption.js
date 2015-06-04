function processData(input) {
    
    read(input);
    
    var phrase = readLine(),
        phraseLength = phrase.length,
        rows = Math.ceil(Math.sqrt(phraseLength)),
        columns = Math.floor(Math.sqrt(phraseLength)),
        forColumns = columns;
        encryptPhrase = "";
        
    if(rows * columns < phraseLength){
        forColumns++;
    }else if (rows === columns){
        columns--;
    }
    
    for (var i = 0, lengthI = rows; i < lengthI; i++){
        for (var j = 0, lengthJ = forColumns; j < lengthJ; j++){
             
            var index = i + ((columns+1) * j),
                letter = phrase[index];
                        
            encryptPhrase += letter || "";
        }    
        encryptPhrase += " ";
    }
    
    console.log(encryptPhrase);
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
