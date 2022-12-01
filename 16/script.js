//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

function sum() {
    let term = 1;                        //ввели переменную, к кторой будем суммировать в след функции
    return function sum1(number) {
        return term += number; 
    }
}

const result = sum();

console.log(result(2));
console.log(result(4));
console.log(result(19));

//document.write(`<span>${result(2)}</span>`)


