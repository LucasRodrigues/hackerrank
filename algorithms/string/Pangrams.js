function processData(input) {
    read(input);
    
    var sentence = readLine().toLowerCase().replace(/ /g,''),    
        sumTotalLetterAscii = 2847,
        tempSum = 0,
        letters = [];
    
    for(var i = 0, length = sentence.length; i < length; i++){
        
        var ascii = sentence[i].charCodeAt(0);
        
        if(letters.indexOf(ascii) < 0){
            tempSum += sentence[i].charCodeAt(0); 
            letters.push(ascii);
        }
    }
    
    console.log((sumTotalLetterAscii === tempSum) ? "pangram" : "not pangram");
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
