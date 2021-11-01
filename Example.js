

const removeNull = (str) =>
{
    for (let i = 0; i < str.length; i++) {
        
        //  230.000 => 230

        if (str[i] == '.' && str[i+1] =='0') {
            var j = 0; var sum = '';
            while (str[j] !== '.') {
                sum += str[j]
                j++;
            }
        }
        
        //  03.1400 => 3.14
        
    if (str[i] == '.' && str[i+1] !=='0'){
        for(let i = 0; i<str.length; i++)
        {
            if(str[i]==0){
                str = str.replace(str[i],'')
                i--
            }
        }
        return str;

    }
    }
    if(sum > 0)
    {
        return sum;
        
    }
    
        // 00402 => 402
   if (str.startsWith('0')) {
            for(let i = 0; i<str.length; i++)
            {
            if(str[i] !== '0')
            {
                break;
            }
            else
            {
                str = str.replace(str[i], '');
                i--;
                }
            }
            return str;
        }
    return str;
}

console.log(removeNull("230.000"));
console.log(removeNull("00402"));
console.log(removeNull("03.1400"));
console.log(removeNull("30"));

// 1-task
const func = n => {
    n = Number(n)
    return n;
}


console.log(func("230.000"))
console.log(func("00402"))
console.log(func("03.1400"))
console.log(func("30"))


//  Task - 3

const func = (num) => {    
    var temp = num;
    var reversed = String(num).split("").reverse().join("");
    return parseInt(`${temp}${reversed}`);
}

console.log(func(123456));
console.log(func(152));
console.log(func(123456789));


//  Task-2

const func = str => {
    var sum = [0, 0, 0, 0]
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            sum[i] += str[i][j].charCodeAt();

        }
    }
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] == sum[i + 1] && sum[i] == sum[3]) {
            return true;
        }
        else {
            return false
        }
    }
}

console.log(func(["@", "@", "@", "@"]));
console.log(func(["abc", "abc", "abc", "abc"]));
console.log(func(["&&", "&", "&&&", "&&&&"]));
console.log(func(["SS", "SS", "SS", "Ss"]));


// 2-task
const func = arr => {
    return arr.reduce((acc, cur) => arr[0] == cur)
}
console.log(func(["@", "@", "@", "@"]))
console.log(func(["abc", "abc", "abc", "abc"]))
console.log(func(["SS", "SS", "SS", "SS"]))
console.log(func(["&&", "&", "&&&", "&&&&"]))
console.log(func(["SS", "SS", "SS", "Ss"]))


// Task-4

const func = myString =>{
var newString = "";
var wasUpper = false;
for (var i = 0; i < myString.length; i++)
{
    if (!wasUpper && myString[i] == myString.toUpperCase()[i])
    {
        newString = newString + " ";
        wasUpper = true;
    }
    else
    {
        wasUpper = false;
    }
    newString = newString + myString[i];

    }
    return newString.trim();
}
console.log(func("SheWalksToTheBeach"));
console.log(func("MarvinTalksTooMuch"));
console.log(func("TheGreatestUpsetInHistory"));



