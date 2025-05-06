// primitive

// 7- types :- Number , strings, Boolean , null, undefined, BigInt, Symbol

const score=100;
const scoreval=100.3;

const islogged=false;
const outsideTemp=null;

let userEmail;

const id= Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid)

const bignum=2232329762n
console.log(typeof bignum)

//Reference (Non-primitive)
// Array , Objects, Functions

const hero=['herry poter', 'batman','knight saga'];

let objvalue={

    id:12,
    name:'hitesh',
    age:24,
};

const myfunction = function(){
    console.log('Hello World!');
    
};
