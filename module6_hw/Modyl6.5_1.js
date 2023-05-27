function createAdder(x) {
  return function(y) {
    return x + y;
  }
}

// Пример использования функции
const add5 = createAdder(5);
console.log(add5(10)); // Выведет 15 в консоль
