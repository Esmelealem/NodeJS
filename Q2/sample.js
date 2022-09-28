let obj= '{"cpu": "intel","Ram": "16Gb"}'

// let str= '["here", "we", "are"]';
let myObj= JSON.parse(obj);
console.log(myObj.cpu)

let obj2= [{"cpu": "intel","Ram": "16Gb"}]

let str= ["here", "we", "are"];
// let myObj2= JSON.stringify(obj);
let myObj2= JSON.stringify(str);
console.log(myObj2)