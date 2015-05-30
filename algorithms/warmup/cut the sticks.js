'use strict';

function processData(input) {

    read(input);
    readLine();
    var sticks = readLine().split(" ");
    var cutLen;

    sticks = sticks.filter(function(el){return el>=1})
    cutLen = Math.min.apply(null, sticks);

    while(sticks.length>0) {
        console.log(sticks.length);
        cutLen = Math.min.apply(null, sticks);
        sticks = sticks.map(function(el){return el-cutLen;})
        sticks = sticks.filter(function(el){return el>=1})
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
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });