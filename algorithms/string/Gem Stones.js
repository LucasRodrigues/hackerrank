function processData(input) {
   
    read(input);
    
    var numberOfStones = parseInt(readLine());
    
    var stoneCompositionName =[],
        stoneCompositionCount = [];
    
    for(var i = 0; i < numberOfStones; i++){
     
        var stoneComposition = readLine();
        
        
        
        var stoneItems =[];
        
        for(var j = 0, length = stoneComposition.length; j < length; j++){
           
            var composition = stoneComposition[j];
            
            if(stoneItems.indexOf(composition) < 0){
                stoneItems.push(composition);
            }
        }    
                
        for (var k =0, length = stoneItems.length; k < length; k++){
            
            var index = stoneCompositionName.indexOf(stoneItems[k]);
            
            if(index < 0){
                stoneCompositionName.push(stoneItems[k]);
                stoneCompositionCount.push(1);
            }else{
                stoneCompositionCount[index]++;
            }
        }
    }    
    
    var result = 0;
    
    for (var j = 0, length = stoneCompositionCount.length; j < length; j++){
        
        if(stoneCompositionCount[j] === numberOfStones){
            result++;        
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
