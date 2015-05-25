function processData(input) {
    read(input);
    
    var text1 = readLine(),
        text2 = readLine(),
        text1Letters = [],
        text2Letters = [],
        text1Count = [],
        text2Count = [];
    
    distinctLetterCount(text1Letters,text1Count,text1);
    distinctLetterCount(text2Letters,text2Count,text2);
    
    var unionTextLetters = union(text1Letters,text2Letters);
    
    var result = 0;
        
    for(var i = 0, length = unionTextLetters.length; i < length; i++){
        
        var letter = unionTextLetters[i];
        
        var indexText1 = text1Letters.indexOf(letter),
            indexText2 = text2Letters.indexOf(letter)
        
        var text1LetterCount = indexText1 >= 0 ? text1Count[i] : 0,
            text2LetterCount = indexText2 >= 0 ? text2Count[indexText2] : 0;
            
            if(text1LetterCount !== text2LetterCount){
                result += text1LetterCount > text2LetterCount ? 
                    text1LetterCount - text2LetterCount :
                    text2LetterCount - text1LetterCount ;    
            }
    }
    
    console.log(result);
} 

function union(listA,listB){
        
    var result = listA.slice();
    
    for(var i = 0, length = listB.length; i < length; i++){
        
        if(result.indexOf(listB[i]) < 0){
            result.push(listB[i]);
        }
    }   
    
    return result;
}

function distinctLetterCount(listLetter,listLetterCount,text){
 
    for(var i = 0, length = text.length; i < length; i++){
        
        var letter = text[i];
        var index = listLetter.indexOf(letter);
        
        if(index < 0){
            listLetter.push(letter);
            listLetterCount.push(1);
        }else{
            listLetterCount[index]++;
        }        
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