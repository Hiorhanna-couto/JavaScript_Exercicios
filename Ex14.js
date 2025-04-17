//Reorganizar Data
//Receba uma data no formato "2025-04-15" e transforme para 
// "15/04/2025" usando split() e reverse().

var prompt = require('prompt-sync')();

let Data = "2025-04-15";
let dataDeOutroMundo = Data.split("-").reverse().join("/");
console.log(dataDeOutroMundo);