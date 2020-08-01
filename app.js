console.log('start');

const printNum = () => {
    for (x = 0; x <= 15; x++ ){
         if (x % 5 == 0 && x % 3 == 0){
            console.log('FizzBuzz');
        } else if (x % 3 == 0){
                console.log('Fizz');
        } else if (x % 5 == 0){
            console.log('Buzz');
        } else {
            console.log(x);
        }
    }
}

//printNum();

const piram = () => {
    let hash = '#'
    let couter = 0
    while (couter < 7){
        console.log(hash);
        hash += '#';
        couter++;
    }
    
}

//piram();

//let line = ['','#','','#']
//console.log(' # #\n# # \n # #\n# # ');

let stringC = '';
let countL = 0;
let countC = 0;
let line = 8;
let coulum = 8;

const cress = () => {
    for (x = 0; x < line; x++){    
        countL += 1;        
        for (y = 0; y < coulum; y++){
            if ((countC + countL) % 2 == 0){
                stringC += '# ';
            } else {
                stringC += '  ';
            }  
            countC += 1;                                  
        }
        stringC += '\n';          
    }
    console.log(stringC);
}

cress();