
//object literals


const mysym=Symbol('key1')
const myobj={
    name:'Sarang',
    age:30,
    "full name":"Sarang Panchal",
    mysym:"k1",
    Email:'Sarang143@gmail.com',
    location : 'Delhi',
    isLoggedin:true,
}

console.log(myobj.Email);
console.log(myobj['Email']);
console.log(myobj["full name"]);
console.log(myobj.isLoggedin);
console.log(myobj.mysym);


myobj.Email='Sarang@microsift.com';
console.log(myobj);
//Object.freeze(myobj)
myobj.Email='Sarang@chatgpt.com';
console.log(myobj);

myobj.greetings= function() {
    console.log("Good Morning");
    
}

console.log(myobj.greetings());


myobj.fuctwo= function () {
    console.log(`js user , ${this.name}`);
    
    
}
console.log(myobj.fuctwo())


