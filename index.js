let startRange = 2;
let endRange = 50;

for (let i = 2; i <= 50; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i + " is a prime number.");
  }
}
