//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
//Наприклад:
//const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//const key = generateKey(16, characters);
//console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

function generateKey(length, arr) {
   let arrNew = [];
   for (let i = 0; i < length; i++) {
      arrNew.push(arr[Math.floor(Math.random() * arr.length)]);
   }

   return arrNew;
}

document.write(`<span>${key.join("")}</span>`);

.//console.log(key);





