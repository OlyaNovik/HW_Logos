// import {sum as add, substract, multiply} from "./math.js" 
// import * as utils from "./math.js"

import multiply from "./math.js";

// Design pattern
/**
 * - Creational
 *     - Constructor
 *     - Module
 *     - Factory
 *     - Singleton
 * 
 * - Structural
 *     - Decorator
 *     - Facade
 * 
 * - Behavoioral 
 *     - Observer
 *     - Mediator
 *     - Command
 */

// ====== Pattern Module (IIFE) ======

const myModule = (function(){
    const privateVariable = "Hello World";

    function privateMethod() {
        console.log(privateVariable);
    }
    return {
        publicMethod: function() {
            privateMethod();
        },
        sayHello: ()=> {
            console.log(privateVariable)
        }
    }
})();
// myModule.sayHello()

// ====== Pattern Revealing Module (IIFE) ======

const revealingModule = (function(){
    let privateVariable = "Petro";
    let publicVariable = "Hello " + privateVariable;

    function privateMethod() {
        console.log("Name: " + privateVariable);
    }
    function publicSetName(name) {
        privateVariable = name;
    }
    function publicGetName(name) {
        privateMethod()
    }

    return {
        setName: publicSetName,
        greeting: publicVariable,
        getName: publicGetName
    }
})();

// revealingModule.getName()
// revealingModule.setName("Mark")
// revealingModule.getName()
// console.log(revealingModule.greeting);

// ====== ES6 Module ======


// console.log(add(5,11))
// console.log(substract(5,11))
console.log(multiply(5,11))