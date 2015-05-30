function processData(input) {

    read(input);
    var numberOfSticks = readLine(),
        sticks = readLine().split(" "),
        sticksLength = sticks.length,
        continueProcess = true;
        
    while(continueProcess){
        
        console.log(sticks.length);
        
        if(sticks.length === 1){
            break;
        }
        
        var minor = sticks.min();
        sticks = cleanSticks(minor, sticks);
        
    }
} 

Array.prototype.min = function() {
  return Math.min.apply(Math, this);
};

function cleanSticks(minor, sticks){
    
    var newSticks = [];
    
    for(var i = 0, length = sticks.length; i < length; i++){
        
        var stick = parseInt(sticks[i]);
        
        if(minor !== stick ){
           newSticks.push(stick - minor);
        }
    }
    
    return newSticks;
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
