function processData(input) {

    read(input);
    
    var text = readLine();
    var letters = [];
    var lettersCount =[];
    
    for(var i =0, length = text.length; i < length; i++){
     
        var letter = text[i];
        var index = letters.indexOf(letter);
        
        if(index < 0){
            letters.push(letter);
            lettersCount.push(1);
        }else{
            lettersCount[index]++;
        }
    }   
    
    var evenCount = 0;
    var oddCount = 0;
    
    for (var j = 0, length = letters.length; j < length; j++ ){
        
        if(lettersCount[j] % 2 === 0){
            evenCount++;
        }else{
            oddCount++;
        }
    }
    
    var result = (oddCount === 1) || (oddCount === 0) ? "YES" : "NO";
    
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
