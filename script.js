//  round function

const round = (a) => {
    var test = a - parseInt(a);
    test < 0.5 && console.log(parseInt(a)); ;
    test >= 0.5 && console.log(parseInt(a+1));
    
}
round(5.4);


//  ceil function

const ceil = (a) => {
    return parseInt(a+1)
}

console.log(ceil(2.3));

// floor function

const floor = (a) => {
    return parseInt(a);
}

// abs function

const abs = (a) => {
    return (a ** 2) ** 0.5;

}

// sqrt function
const sqrt = (a) => {
    return a ** 0.5;
}

// cbrt function

const cbrt = (a) => {
    return a**(1/3)
}

// pow function

const pow = (a, b) => {
    return a ** b;
}
console.log(5,2);


// 2-Task

var title = "welcome webbrain"
title = title.repeat(5);
counterWe = 0;
counterA = 0;
counterB = 0;

const we = (text) => {
    var inde = parseInt(text.indexOf('we'));
    counterWe++;
    text = text.slice(inde + 2);
    text.includes('we') && we(text);
    text.includes("we") == false && console.log(counterWe);
}

// const b = (textB) => {
//     var inde =  textB.indexOf("b");
//     counterB++;
//     textB = textB.slice(inde);
//     textB.includes('b') && b(textB);
//     textB.includes("b") == false && console.log(counterB);
// }

we(title);
// b(title);

