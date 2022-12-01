//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28


function sum() {
        let term = 1;                           //ввели переменную, к кторой будем суммировать в след функции
         return function sum1(number) {
            term += number;
                return term;
        }  
    }
    
    sum();

    console.log(sum(2));
    console.log(sum(4));