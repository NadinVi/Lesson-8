//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28


function sum() {
        let term = 1;
         return function sum1(number) {
            return term += number;
        }  
    }
    
    sum();

    console.log(sum(2));
    console.log(sum(4));