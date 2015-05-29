function processData(input) {
    
    read(input);
   
    var numberOfLines = parseInt(readLine()),
        map = [];
    
    
    for(var i = 0, lengthI = numberOfLines; i < lengthI; i++){
     
        var line = readLine();
        
        map[i] = [];
        
        for (var j = 0, lengthJ = line.length; j < lengthJ; j++){
            map[i][j] = parseInt(line[j]);
        }
    }    
    
    var mapRow = "";
    
    for(var j = 0, lengthJ = map.length; j < lengthJ; j++){
        for (var k = 0, lengthK = map[j].length; k < lengthK; k++){
            
            if((j === 0) || (j === lengthJ-1) || (k === 0) || (k === lengthK-1)){
                mapRow += "" + map[j][k];
            }else{
                if ((map[j][k-1] < map[j][k]) && (map[j][k+1] < map[j][k]) && 
                   (map[j-1][k] < map[j][k]) && (map[j+1][k] < map[j][k])){
                    mapRow += "" + "X";
                } else{
                    mapRow += "" + map[j][k];
                }
            }
        }
        
        console.log(mapRow);
        mapRow = "";        
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
