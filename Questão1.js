function Fibonacci(num) {
    let a = 0;
    let b = 1;
    let proximo = a + b;
  
    if (num === a || num === b) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
  
    while (proximo <= num) {
      if (proximo === num) {
        return `${num} pertence à sequência de Fibonacci.`;
      }
      a = b;
      b = proximo;
      proximo = a + b;
    }
  
    return `${num} não pertence à sequência de Fibonacci.`;
  }
  
  const numero = 312312;
  console.log(Fibonacci(numero));
  
