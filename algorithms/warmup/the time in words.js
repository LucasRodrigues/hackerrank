function processData(input) {
    
    read(input);
    
    var hour = parseInt(readLine()),
        minute = parseInt(readLine()),
        words = "";
    
    if(minute === 0){
        words = numberToWords(hour) + " o' clock";
    }else if (minute === 15){
        words = "quarter past " +  numberToWords(hour);
    }else if (minute < 30){
        words = numberToWords(minute) + " minutes past " +  numberToWords(hour);
    }else if (minute === 30){
        words = "half past " +  numberToWords(hour);
    }else if (minute === 45){
        words =  "quarter to " + numberToWords(hour + 1);
    }else if (minute > 30){
        words = numberToWords(60-minute) + " minutes to " + numberToWords(hour + 1);
    }
    
    console.log(words);
} 

function numberToWords(number){
    
    var word = "";
    
    var ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX","SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN","TWELVE", "THIRTEEN","FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN","NINETEEN"); 
var tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY"); 

    if(number < 20){
        word = ones[number];
    }else{
        word = tens[number.toString()[0]] + " " + ones[number.toString()[1]] ;
    }
    
    return word.toLowerCase();
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
