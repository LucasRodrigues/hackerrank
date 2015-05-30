function processData(input) {
    read(input);
    
    var numberOfTests = parseInt(readLine());
    
    for(var i = 0, lengthI = numberOfTests; i < lengthI; i++){
        
        var numbers = readLine().split(" ").map(function (m){ return parseInt(m);}),
            counter = 0;
        
        for(var j = numbers[0], lengthJ = numbers[1]; j <= lengthJ;){
                        
            var squareNumber = Math.sqrt(j);
            if (squareNumber === parseInt(squareNumber, 10)){
                counter++
                
                var nextSquareNumber = Math.pow(squareNumber+1,2);
                if(nextSquareNumber > lengthJ){
                    break;
                }else{
                    j = nextSquareNumber;
                }
            } else {
                j++;
            }                      
        }        
        
        console.log(counter);
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
