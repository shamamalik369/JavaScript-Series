//const xuser=new Object();

const { use } = require("react");

const xuser={}

xuser.id="123";
xuser.name="Mary";
xuser.age=23;
xuser.email='mary@123.com';
xuser.isLoggedIn=false;
//console.log(xuser);

const newobj={
    Email:'abc123@gmail.com',
    fullName:{
        userfullname :{
            firstname:'SHAMA',
            Llastname:'MALIK'
        }
    }
}

//console.log(newobj.fullName?.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={1:"a",2:"b"}
const obj4={1:"a",2:"b"}

//const obj3={obj1,obj2}

const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

console.log(users);

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

//console.log(users.hasOwnProperty('isLoggedIn'));
