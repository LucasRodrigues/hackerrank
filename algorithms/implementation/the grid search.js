function processData(input) {

    read(input);

    const numberOfTest = readLine();
    for(var i = 0, lengthI = numberOfTest; i < lengthI; i++){

        var main = get();
        var sub = get();
        var counter = 0;

        for(var j = 0, lengthJ = main.length - sub.length + 1; j < lengthJ; j++){
            for(var k = 0, lengthK = main[j].length - sub[0].length + 1; k < lengthK; k++){

                if(main[j][k] == sub[0][0]){
                    for(var l = 0, lengthL = sub.length; l < lengthL; l++){
                        for(var m = 0, lengthM = sub[l].length; m < lengthM; m++){

                            if(main[j+l][k+m] == sub[l][m]){
                                counter++;
                                continue
                            }else{
                                break;
                            }
                        }
                    }
                    if(counter < sub.length * sub[0].length){
                        counter = 0;
                    }
                }
                if(counter != 0){
                    break;
                }
            }
            if(counter != 0){
                break;
            }
        }



        console.log(counter != 0 ? 'YES' : 'NO');
    }
}

function get(){
    var size = readLine().split(' ');
    var height = size[0];
    var width = size[1];
    var main = []
    for (var j = 0, lengthJ = height; j < lengthJ; j++){

        var values = readLine().split('');
        main.push(values)
    }

    return main;
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
