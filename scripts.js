let hours = new Date().getHours();
let greeting;

function greet() { 
  if (hours < 18) {
    greeting = `Good day!`;
  } else {
    greeting = `Good evening!`;
  }

  document.querySelector(".goodTime").innerHTML = `<strong>${greeting}</strong><br><br> Current timestamp is:<br>` + Date();
}