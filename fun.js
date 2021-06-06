 console.log("it's work");

 var input = prompt("what is your favorite part in Taekwondo game ? poomsae, show's or fight ","poomsae , show , fight");


 function change(id,s) {
  var x= document.getElementById(id).innerHTML = s;
  return x;
}
function change2(z,m){
    var y= document.getElementsByClassName(z).innerHTML = m;
  return y;
}

while( input != "poomsae" &&  input != "show's" && input != "fight"){
 input =prompt("what is your favourit thing in Taekwondo ? poomsae, show's or fight ","Poomse , show's , fight");
}

 function start(){
 if(input == "poomse"){
  change("img1","<img src='https://www.insidethegames.biz/media/image/150153/o/7Q1ULbtrDZstcSPa' alt='Taekwondo pic' width='500' />");
  change("h2","<h2> Poomse </h2>");
  change("d1","<p style='font-size: 18pt;'> In taekwondo, taegeuk is a set of Pumsae (also known as Poomsae or Poomse), or defined pattern of defense-and-attack forms used to teach taekwondo. </p>");
change("d2","<p style='font-size: 18pt;'> Between 1967 and 1971 Kukkiwon-style taekwondo made use of an older set of forms called the palgwae forms developed by the Korea Taekwondo Association (KTA) with input from some of the original nine kwans of taekwondo. By 1970 additional kwans had joined the KTA so the newer set of taegeuk forms was developed to better represent inputs from all the participating kwans. By 1971 the palgwae forms were considered to be deprecated in favor of the newer taegeuk forms, though some schools still teach palgwae forms as well.All World Taekwondo Federation (WTF) Pumsae competitions use the taegeuk pumsae, along with 8 of the black belt Pumsae. </p>");
change("d3","<p style='font-size: 18pt;'> To gain a black belt, a student generally must know all eight Taegeuk Poomsae and also be able to perform all of them consecutively with no breaks in between.  </p>");
  }else if(input == "show's" ){
    // change("img2","<img src='https://www.insidethegames.biz/media/image/150153/o/7Q1ULbtrDZstcSPa' alt='Taekwondo pic' width='500' />");
    // change2("h2","<h2> </h2>");
    // change2("img1","<p> </p>");
 }else if(input == "fight"){
    // change("img3","<img src='https://www.insidethegames.biz/media/image/150153/o/7Q1ULbtrDZstcSPa' alt='Taekwondo pic' width='500' />");
  //  change2("h2","<h2> </h2>");
  //  change2("img1","<p> </p>");
 }
}
start();