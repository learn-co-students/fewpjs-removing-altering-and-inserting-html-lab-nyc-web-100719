document.querySelector("main#main").remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory"
// document.appendChild(newHeader)
// console.log(newHeader)

// let newHeader = document.createElement("h1")
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";

