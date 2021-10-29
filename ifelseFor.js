
//  1-task

var text = 'webBrain Academy';
text = text.repeat(5);
text = text.toLowerCase();
text = text.split(' ').join('');

var counterA = 0;
var counterB = 0;
for (var i = 0; i < text.length; i++){
    
    if (text[i] == 'a')
    {
            counterA++;
    }
    if (text[i] == 'b') {
        counterB++;
    }

}
console.log(counterA);
console.log(counterB);
console.log(text);


// task 2

var countToq=0;
var countJuft=0;
var count=0;
for (var i = 0; i < 100; i++) {
     if (i % 2 == 0){
            countJuft++;
    }
    if (i % 2 == 1) {
        countToq++;
    }
    
}
console.log(countJuft);
console.log(countToq);

var count = 0;
for (var i = 2; i <= 100; i++)
{
    for (var j = 1; j <= i; j++)
    {
        if(i%j==0)
        count++      
    }

    if (count == 2) {
    console.log(j)
    }
    count = 0;
      
}



//  task 3


