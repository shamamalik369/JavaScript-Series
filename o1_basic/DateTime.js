let mydate=new Date()

// console.log(mydate);


// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

let data=new Date(2023,3,9);
console.log(data);
console.log(data.toDateString());

let d=new Date(2023,0,9,5,3);
console.log(d.toLocaleString());

let datenow= Date.now()
console.log(datenow);


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})