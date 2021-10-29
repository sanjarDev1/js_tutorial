
var number=100, isPrime, n;

for (let i = 2; i <= number; i++){
    isPrime = 0
    for (let j = 2; j <= i / 2; i++)
    {
        if (i % j == 0) {
            isPrime = 1;
            
        }
    }
    if (isPrime == 0 && number != 1) {
        console.log(i + " ");
    }
}
