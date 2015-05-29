function processData(input) {
    read(input);
    
    var qtOfNumber = readLine(),
        numbers = readLine().split(" "),
        numberList = [],
        numberCountList = [];
    
    for(var i = 0, length = numbers.length; i < length; i++){
        
        var number = numbers[i],
            index = numberList.indexOf(number);
        
        if(index < 0){
            numberList.push(number);
            numberCountList.push(1);
        }else{
            numberCountList[index]++;
        }
    }
    
    var result = 0;
    for(var j = 0, lengthJ = numberCountList.length; j < lengthJ; j++){
        
        if(numberCountList[j] === 1){
            
            result = numberList[j];
            break;
        }        
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
