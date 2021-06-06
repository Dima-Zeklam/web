
 console.log("it's work");
//   var d = new Date();
// confirm("Today is " +  d  );
//var name =prompt("what is your name ? ");
// if(name !=  null)
//   alert("Hi " + name + ", welcom to my page ^_^");
// var im="";
// var color =prompt("what is your favourit color ? ");

// if(color != null){
//  document.getElementById("change").style.color=color;
// }

// document.write("Add some JavaScript");

var input = prompt("what is your favorite part in Taekwondo game ? poomse, show's or fight ","poomse , show , fight");



while( input != "poomse" &&  input != "show" && input != "fight"){
 input =prompt("what is your favourit thing in Taekwondo ? poomse, show or fight ","poomse , show , fight");
}

if( input == "poomse" ||  input == "show" || input == "fight"){
  document.write(input);
   document.write("<br>");
 }

var x =prompt("How many times you want to see the tkd image ?");

for(var i=0;i<x;i++){
document.write("<img src='https://i.pinimg.com/564x/ac/0b/81/ac0b81e2ba6bcceb53ba49a4074ce6ad.jpg' width='100' />");
}


