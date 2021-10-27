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

var title = "hello webbrain"
title = title.repeat(5);
count = 0;
const text = (a) => {
    var index = a.indexOf("we")
    count++;
    a = text.slice(index + 2);
    
    a.includes(/we/gi) && text(a)
}

text(title.repeat(5));

