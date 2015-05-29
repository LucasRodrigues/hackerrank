function processData(input) {
    read(input);
    
    var numberOfTest = parseInt(readLine());
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
        
        var input = readLine().split(" "),
            money = parseInt(input[0]),
            priceChocolate = parseInt(input[1]),
            exchangeChocolate = parseInt(input[2]);
        
        var chocolates = Math.floor(money / priceChocolate);
            packing = chocolates,
            continueProccess = true;
        
           
        while(continueProccess){
            
            var extra = Math.floor(packing / exchangeChocolate);
            
            if(extra > 0){
                chocolates += extra;
                packing -= (exchangeChocolate * extra);
                packing += extra;    
            }   
            
            if(packing < exchangeChocolate){
                    continueProccess = false;
                }
        }
        
        console.log(chocolates);
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
