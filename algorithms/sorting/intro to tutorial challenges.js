function processData(input) {
    
    read(input);
    
    var element = parseInt(readLine()),
        setSize = parseInt(readLine()),
        set = readLine().split(" ").map(function(a){ return parseInt(a);}),
        index = set.indexOf(element);
    
    console.log(index);
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
