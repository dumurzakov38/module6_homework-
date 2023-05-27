function isPrime(num) {
  // Проверяем, что число меньше или равно 1000
  if (num > 1000) {
    console.log("Данные неверны.");
    return;
  }

  // Проверяем числа 0 и 1
  if (num === 0 || num === 1) {
    console.log(num + " не является простым числом.");
    return;
  }

  // Проверяем остальные числа
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(num + " не является простым числом.");
      return;
    }
  }

  console.log(num + " является простым числом.");
}

isPrime(543);