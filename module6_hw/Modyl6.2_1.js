function countEvenOddZero() {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'four', null, undefined];

        let evenCount = 0;
        let oddCount = 0;
        let zeroCount = 0;

        for (let i = 0; i < arr.length; i++) {
            const num = parseInt(arr[i]);
            if (!isNaN(num)) { // проверяем, что значение можно привести к числу
                if (num === 0) {
                    zeroCount++;
                } else if (num % 2 === 0) {
                    evenCount++;
                } else {
                    oddCount++;
                }
            }
        }

        console.log(`Количество четных элементов: ${evenCount}`);
        console.log(`Количество нечетных элементов: ${oddCount}`);
        console.log(`Количество нулевых элементов: ${zeroCount}`);
};