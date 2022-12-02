// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. 
//Тот массив, сумма которого большая – должен вернутся функцией.
// Пример:
// a = [1,2,3, 'hello',4,5] => summA = 15
// b = [1,2,3, true, 4, undefined, 6] => summB = 16
// if(summA < summB) => return b

const arrOne = [1, 2, 3, 'hello', 4, 5];
const arrTwo = [1, 2, 3, true, 4, undefined, 6];

function sumOfArrayNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") sum += arr[i];
    }
    
    return sum;
}

function compareArrays(arr1, arr2) {
    const sumArrOne = sumOfArrayNumbers(arr1);
    const sumArrTwo = sumOfArrayNumbers(arr2);

    return sumArrOne > sumArrTwo ? arr1 : arr2;
}

console.log(compareArrays(arrOne, arrTwo));


// function compareArrays(arr1, arr2) {
//     let sumArrOne = 0;
//     for(let i = 0; i < arr1.length; i++) {
//         if (typeof arr1[i] === "number") sumArrOne += arr1[i];
//     }

//     let sumArrTwo = 0;
//     for(let i = 0; i < arr2.length; i++) {
//         if (typeof arr2[i] === "number") sumArrTwo += arr2[i];
//     }

//     return sumArrOne > sumArrTwo ? arr1 : arr2;
// }

// console.log(compareArrays(arrOne, arrTwo));