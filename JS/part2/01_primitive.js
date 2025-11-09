// In JS everything is an object

//Number
    let balance = 25;
    let anotherbalance = new Number(120); // not recommended way

// console.log(typeof balance);
// console.log(typeof anotherbalance);

//boolean
    let isActive = true;
    let isReallyActive = new Boolean(false); // not recommended way

// null and undefined
    let capPrice; // undefined

    let bagPrice = undefined; //undefined value is after declaration called defined

    let temperature = null;
    // console.log(capPrice);


// String

    let stringDeclarationWay = "Harsh";
    let stringDeclarationWay2 = "Parth";

    let oldGreetmessage = "Hello " + stringDeclarationWay; //older way

    let newGreetmessage = `Hello ${stringDeclarationWay} and ${stringDeclarationWay2} ! welcome to the New world`; //newer way and it's called string interpolation

    let demoOne = `value is ${2 * 2}`; //it's also do computation

    // console.log(newGreet);


// symbol -> use for unique value everytime.

    let sm1 = Symbol();
    let sm2 = Symbol();
    console.log(sm1 == sm2);

