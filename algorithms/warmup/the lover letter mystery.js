function processData(input) {
    
    read(input);
    
    var numberOfTest = parseInt(readLine());
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
        
        var word = readLine(),
            continueWhile = true,
            modifiedWord = word,
            index = 0,
            count = 0;
        
        while(continueWhile){
        
            if(isPalindrome(modifiedWord)){
                continueWhile = false;                
            }else{                
                var letterIndex = modifiedWord[index],
                    correledLetterIndex = modifiedWord[modifiedWord.length - index - 1];
                
                count += Math.abs(correledLetterIndex.charCodeAt(0) - letterIndex.charCodeAt(0));                
                modifiedWord = modifiedWord.replaceAt(modifiedWord.length - index - 1, letterIndex);
                index++;
            }                        
        }
        
        console.log(count)
    }
    
} 

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
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
