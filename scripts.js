function greet() { 
if (new Date().getHours() < 18) {
  document.querySelector(".goodTime").innerHTML = "<strong>Good day!</strong><br><br> Current timestamp is:<br>" + Date();
}
else document.querySelector(".goodTime").innerHTML = "<strong>Good evening!</strong><br><br> Current timestamp is:<br>" + Date();
}