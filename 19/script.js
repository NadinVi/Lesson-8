// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })


const arr = [1,2,3, true, 4, undefined, 6]; 

function copy(list, func) {
    const copyArr = list.slice();

    if(typeof func === "function") {
        for(let i = 0; i < copyArr.length; i++) {
            if(typeof copyArr[i] === "number") copyArr[i] = func(copyArr[i]);
        }
    }

    return copyArr;
}

function numMultiplier(value) {
    return value *= 100;
}

console.log(copy(arr, numMultiplier));