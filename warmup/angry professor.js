function processData(input) {
    
    read(input);
    
    var numberOfTest = readLine();
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
     
        var input1 = readLine().split(" "),
            numberOfStundets = input1[0],
            limit = input1[1],
            times = readLine().split(" ");
         
            var counter = 0,
                hasClass = false;
        
            for(var j = 0, lengthJ = times.length; j < lengthJ; j++){

                if(parseInt(times[j]) <= 0) {
                    counter++;
                }
                
                if(counter >= limit){
                    
                    hasClass = true;
                    break;
                }
            }  
        
        console.log(hasClass ? "NO" : "YES");
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
