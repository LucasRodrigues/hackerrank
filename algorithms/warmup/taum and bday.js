function processData(input) {
    
    read(input);
    
    var numberOfTest = parseInt(readLine());
    
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){
        
        var input1 = readLine().split(" "),
            qtBlack = parseFloat(input1[0]),            
            qtWhite = parseFloat(input1[1]),
            input2 = readLine().split(" "),
            priceBlack = parseFloat(input2[0]),            
            priceWhite = parseFloat(input2[1]),
            priceTrade = parseFloat(input2[2]);
        
        var combineWhiteBlack = (qtWhite * priceWhite) + (qtBlack * priceBlack),
            combineTradeBlack = (qtWhite * (priceTrade + priceBlack)) + (qtBlack * priceBlack),
            combineWhiteTrade = (qtWhite * priceWhite) + (qtBlack * (priceTrade + priceWhite)),                                 combineTradeTrade = (qtWhite * (priceTrade + priceBlack)) + (qtBlack * (priceTrade + priceWhite)),                 combines = [combineWhiteBlack,combineTradeBlack,combineWhiteTrade,combineTradeTrade];
                                 
        console.log(Math.min.apply(Math,combines));
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
