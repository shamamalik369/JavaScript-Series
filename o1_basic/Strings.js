const name='Sarang';
const repocount=35;

//console.log(name + repocount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const newName= new String('Shama');


//console.log(newName[3]);
//console.log(newName.length);
//console.log(newName.__proto__);


//console.log(newName.toUpperCase());

//console.log(newName.charAt(1));

//console.log(newName.indexOf('m'));


const NewString= newName.substring(0,4)
console.log(NewString);

const St= newName.slice(-2,4)
console.log(St);

const nametrim="  Aaron  ";
//console.log(nametrim);
//console.log(nametrim.trim());


const urls='https://google.com/shama%20malik12';
console.log(urls.replace('%20','-'));


const name1="hello , Here we are learning JS."
console.log(name1.split(" "));

