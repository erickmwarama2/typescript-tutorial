"use strict";
const names = ['Max', 'Erick'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
    setTimeout(() => {
        reject(new Error('Failed'));
    }, 5000);
});
promise.then(data => {
    data.split(' ');
}, err => {
    console.log(err);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// console.log(merge({name: 'Erick'}, {age: 31}));
const mergedObj = merge({ name: 'Erick' }, { age: 31 });
