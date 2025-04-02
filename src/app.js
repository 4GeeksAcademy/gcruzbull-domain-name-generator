import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let domains = getDomains()
  let list = document.getElementById("domains")
  domains.forEach(element => {
    list.innerHTML += `<li>${element}</li>`
  });
};


function getDomains() {
  let name = ['guillermo', 'alvaro', 'laura', 'valentina', 'deimian', 'julian', 'tomas', 'maria', 'anita'];
  let lastname = ['cruz', 'bull', 'barros', 'alvarez', 'lira', 'valenzuela', 'vidal', 'perez'];
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArray = []
  for (let i = 0; i < name.length; i++) {
    console.log("Hello!")
    for (let j = 0; j < lastname.length; j++) {
      for (let k = 0; k < number.length; k++ ) {
        console.log(`${name[i]}${lastname[j]}${number[k]}.com`)
        newArray.push(`${name[i]}${lastname[j]}${number[k]}.com`)
      }
    }
  }
  return newArray
}