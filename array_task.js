//  a va b 

var fruits = ['apple', 12, 'Ananas', 'Orange', 'Banana', 'kiwi'];

var text = fruits.filter((value) => typeof value === "string");
var countA = 0;
var countB = 0;
for (let i = 0; i < text.length; i++){
    
    for (let j = 0; j < text.length; j++)
    {
        (text[i][j] === 'a' || text[i][j] === 'A')  && countA++;
        (text[i][j] === 'b' || text[i][j] === 'B')  && countB++;
    }
}

console.log(countA,countB);


//  raqamlarni hisoblash;

var number = [10, 5, 11, 'apple', 2, 3, 4, 5, 6]
var count = 0;
var sum = number.filter((value) => typeof value === 'number').forEach((value) => { count += value; });

console.log(count);

// max-1 and min-1

var number = [10, 5, 11, 'apple', 2, 3, 4, 5, 6];

var sum = number.filter((value) => typeof value === 'number');

    let len = sum.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (sum[j] > sum[j + 1]) {
                let tmp = sum[j];
                sum[j] = sum[j + 1];
                sum[j + 1] = tmp;
            }
        }
    }
     

console.log(sum);


// odd and even indexs

var number = [10, 5, 11, 'apple', 2, 3, 4, 5, 6];
var count = 0;
var countAdd = 0;
var sum = number.filter((value) => typeof value === 'number');

for (let i = 0; i < sum.length; i++){
    if (i % 2 == 0) {
        count += sum[i];
    }
    else {
        countAdd += sum[i];
    }
}
console.log(count);
console.log(countAdd);

// reverse 


var fruits = ['apple','Ananas', 'Orange', 'Banana', 'kiwi'];
var sum;
for (let i = fruits.length-1; i > 0; i--){
    sum = fruits[i] 
    // console.log(fruits[i]);
}
console.log(sum);