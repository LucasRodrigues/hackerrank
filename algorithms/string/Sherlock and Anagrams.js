function processData(input) {
    
    read(input);
    
    var numberOfTest = readLine(),
        result = "";
    
    
    for(var i = 0, length = numberOfTest; i < numberOfTest; i++){
        
        var word = readLine(),
            substrings = getSubstringsFromWord(word),
            wordResult = 0;
        
        for(var j = 0, lengthJ = substrings.length; j < lengthJ; j++){
            
            for (var k = j + 1, lengthK = lengthJ; k < lengthK; k++){
                
                var substring1 = substrings[j],
                    substring2 = substrings[k];
                                
                if(isAnagram(substring1,substring2)){
                    wordResult++;
                }
            }            
        }
        result += wordResult + "\n";
    }
    
    console.log(result);
} 

function isAnagram(word1,word2){
    
    if(word1.length !== word2.length){
        return false;
    }
    
    var word1Letters = [],
        word2Letters = [],
        word1Count = [],
        word2Count = [];    
    
    distinctLetterCount(word1Letters,word1Count,word1);
    distinctLetterCount(word2Letters,word2Count,word2);
    
    var bigLetter =[],
        bigCount =[],
        smallLetter =[], 
        smallCount =[];  
    
    if(word1Letters.lenght > word2Letters.length){
       
       bigLetter = word1Letters;
       bigCount = word1Count;
       smallLetter = word2Letters;
       smallCount = word2Count;
    } else{

       bigLetter = word2Letters;
       bigCount = word2Count;
       smallLetter = word1Letters;
       smallCount = word1Count;
    }
    
    for(var i = 0, length = bigLetter.length; i < length; i++){
        
        var index2 = smallLetter.indexOf(bigLetter[i]);
        
        var count1 = index2 < 0 ? 0 : smallCount[index2],
            count2 = bigCount[i];
        
        if(count1 !== count2){
            return false;
            break;
        }        
    }    
    
    return true;
}

function getSubstringsFromWord(word){
    
    var substrings = [];
                
    for(var i = 0, length = word.length; i < length; i++){
        
        for(var j = i+1,length2 = word.length; j <= length2; j++){
            
            var substring = word.substring(i,j);
            
            if(substring.length !== word.length){
                substrings.push(substring);
            }
        }
    }    
    
    return substrings;
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
