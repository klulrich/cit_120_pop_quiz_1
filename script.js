var number = 5;
var numberEle = document.body.querySelector(".number");
var prompter = Number(prompt("Type a number."));
var adding = (number+prompter);
var adding2 = (prompter2+number)

if (adding < 10){
  var prompter2 = Number(prompt("Type a number."));
  var adding2 = (prompter2+number)
}else if(adding2 < 10){
  var prompter3 = Number(prompt("Type a number."));
  var adding3 = (prompter3+number)
  numberEle.innerHTML="Program is over"
}else if(adding >= 10){
  document.body.querySelector(".number").innerHTML="Program is over"
}