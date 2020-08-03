/* 
Object.keys() 与Reflect.ownKeys的区别
https://stackoverflow.com/questions/34449045/what-is-the-difference-between-reflect-ownkeysobj-and-object-keysobj 
*/
let testObject = {};
Object.defineProperty(testObject, 'myMethod', {
    value: function () {
        alert("Non enumerable property");
    },
    enumerable: false
});

//does not print myMethod since it is defined to be non-enumerable
console.log(Object.keys(testObject));   

//prints myMethod irrespective of it being enumerable or not.
console.log(Reflect.ownKeys(testObject)); 