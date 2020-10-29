
/*************Dice1*****************/
document.querySelector("h1").innerHTML="Conflict Resolver!";
var randomNumber1= Math.random();
var randomNumber1=Math.floor(randomNumber1*6)+1;
console.log(randomNumber1);
var imageName1="images/dice"+randomNumber1+".png";
console.log(imageName1);
document.querySelector(".img1").setAttribute("src",imageName1);

/*************Dice2*****************/
var randomNumber2=Math.random();
var randomNumber2=Math.floor(randomNumber2*6)+1;
var imageName2="images/dice"+randomNumber2+".png";
console.log(imageName2);
document.querySelector(".img2").setAttribute("src",imageName2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" <i class='icon fas fa-male'></i><i class='icon fas fa-flag'></i> Husband Won";
  document.querySelector("h1").classList.add("player1");
  setTimeout(function(){
    document.querySelector("h1").classList.remove("player1");
    document.querySelector("h1").innerHTML="Conflict Resolver";
  },2000);
}else if(randomNumber2>randomNumber1){
document.querySelector("h1").innerHTML="Wife Won <i class='icon fas fa-female'></i> <i class='icon fas fa-flag'>";
document.querySelector("h1").classList.add("player1");
  setTimeout(function(){
  document.querySelector("h1").classList.remove("player1");
  document.querySelector("h1").innerHTML=" Conflict Resolver ";
},2000);
}else{
  document.querySelector("h1").innerHTML="Draw!!!"  ;
  document.querySelector("h1").classList.remove("player1");
}
