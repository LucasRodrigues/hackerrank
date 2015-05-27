function processData(input) {
    read(input);
    
    var numberOfTests = readLine(),
        result = "";
    
    for(var i = 0; i < numberOfTests; i++){
        
        var word = readLine();
        
        if(isPalindrome(word)){
            result += "-1\n";            
        }else{
            
            for(var j = 0, length = word.length; j < length; j++){
            
                var subWord = word.replaceAt(j, " ");
                
                if(isPalindrome(subWord)){
                    result += j + "\n";  
                    break;
                }
            }
        }        
    }
    
    console.log(result);
} 

String.prototype.replaceAt=function(index, character) {
    return (this.substr(0, index) + character + this.substr(index+character.length)).replace(" ","");
}

function isPalindrome(word){
    
    for(var i = 0, length = (word.length-1)/2; i < length; i++){
             
        if(word[i] !== word[word.length-i-1]){
            return false;
        }        
    }    
    
    return true;
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
