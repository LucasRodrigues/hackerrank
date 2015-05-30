function processData(input) {
    read(input);
    
    var input1 = readLine().split(" "),
        numberOfPeople = parseInt(input1[0]),
        numberOfDisciplines = parseInt(input1[1]),
        people = [];
    
    for(var i = 0, lengthI = numberOfPeople; i < lengthI; i++){
        people.push(readLine());
    }
    
    var disciplineCount = [],
        pairCount = [];
        
    for(var j = 0, lengthJ = people.length; j < lengthJ; j++){
        for(var k = j, lengthK = people.length; k < lengthJ; k++){
            
            var count = 0;
            
            for(var l = 0, lengthL = numberOfDisciplines; l < lengthL; l++){
            
                if((parseInt(people[j][l]) + parseInt(people[k][l])) > 0){
                    count++;
                }
            }
            
            var index = disciplineCount.indexOf(count);
            if(index < 0){
                disciplineCount.push(count);
                pairCount.push(1);
            }else{
                pairCount[index]++;
            }
        } 
    }
    
    var max = Math.max.apply(Math, disciplineCount);
    var index = disciplineCount.indexOf(max);
    var maxCount = pairCount[index];
    
    console.log(max);
    console.log(maxCount);
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
