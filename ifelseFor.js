
//  1-task

var text = 'webBrain Academy';
text = text.repeat(5);
text = text.toLowerCase();
var text2 = text;
text = text.split(' ').join('');
console.log(text);
// console.log(text2);
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
        if (i % j == 0)
            count++;
    }

    if (count == 2) {
    console.log(j)
    }
    count = 0;
      
}



//  task 3


for (var i = 10; i >= 0; i--)
{
    console.log(i);
    }


    // task -4


var counter = 0;
var sum = 0;
let number = 748394736384937483n;
number = "" + number;
for (var i = 0; i <= number.length-1; i++)
{
    if (i % 2 == 0)
    {
        counter = counter + +number[i]
    }
    else
    {
        sum += +number[i]
    }
}
console.log(sum);
    console.log(counter);


// task -5;

var number=100;
var count =0;
for(var i = 2; i<=number; i++)
{
count = 0;
     for(var j = 2;j<=i/2; j++)
     {
       if( i % j === 0)
       {
         count++;
         break;
       }
     }
  
if(count == 0){
  console.log(i);
}
}

// tub sonni topish

for (let i = 2; i <= 200; i++)
{
    var count = 0;
    for (let j = 2; j <= parseInt(Math.sqrt(i)); j++){
        i % j === 0 && count++;
    }
    count ===0 && console.log(i,"tub son");
}














