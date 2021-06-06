 console.log("it's work");

 var input = prompt("what is your favorite part in Taekwondo game ? poomse,  fight or tkd ","poomse , fight or tkd");


 function change(id,s) {
  var x= document.getElementById(id).innerHTML = s;
  return x;
}

while( input != "poomse" && input != "fight" && input != "tkd" ){
 input =prompt("what is your favorite part in Taekwondo game ? poomse or fight or tkd ","poomse ,fight , tkd");
}

// style='font-size: 18pt;'
 function start(){
 if(input == "poomse"){
  change("img1","<img src='  https://i.ytimg.com/vi/IBtz0mmUpc4/maxresdefault.jpg' width='500' />");
    change("img2","<img src='  http://img.koreatimes.co.kr/upload/newsV2/images/202004/ef36d348cc964665a939d120be365750.jpg/dims/resize/740/optimize' width='500' />");
   change("img3","<img src='  https://www.lima2019.pe/sites/default/files/styles/max_1300x1300/public/2019-07/WhatsApp%20Image%202019-07-28%20at%2011.30.11%20AM.jpeg' width='500' />");
  change("h2","<h2> Poomse </h2>");
  change("d1","<p> In taekwondo, taegeuk is a set of Pumsae (also known as Poomsae or Poomse), or defined pattern of defense-and-attack forms used to teach taekwondo. </p>");
change("d2","<p> Between 1967 and 1971 Kukkiwon-style taekwondo made use of an older set of forms called the palgwae forms developed by the Korea Taekwondo Association (KTA) with input from some of the original nine kwans of taekwondo. By 1970 additional kwans had joined the KTA so the newer set of taegeuk forms was developed to better represent inputs from all the participating kwans. By 1971 the palgwae forms were considered to be deprecated in favor of the newer taegeuk forms, though some schools still teach palgwae forms as well.All World Taekwondo Federation (WTF) Pumsae competitions use the taegeuk pumsae, along with 8 of the black belt Pumsae. </p>");
change("d3","<p> To gain a black belt, a student generally must know all eight Taegeuk Poomsae and also be able to perform all of them consecutively with no breaks in between.  </p>");
  }else if(input == "fight" ){
     change("img1","<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg/330px-Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg' width='500' />");
  change("img2","<img src='https://azertag.az/files/galleryphoto/2015/1/1000x669/14281618206523011782_1000x669.jpg' alt='Taekwondo pic' width='500' />");
   change("img3","<img src='https://www.insidethegames.biz/media/image/150153/o/7Q1ULbtrDZstcSPa' alt='Taekwondo pic' width='500' />");
   change("h2","<h2> Fight </h2>");
   change("d1","<p>  Developed in Korea in the late 1940s, Taekwondo combines combat and self-defense techniques with sport and sparring. It is characterized by its emphasis on speed and agility, with head-height kicks, jumping and spinning kicks, and fast kicking techniques. </p>");
   change("d2","<p>    To facilitate fast turning kicks, Taekwondo generally adopts stances that are narrower and hence less-stable than the broader, wider stances used by martial arts such as Karate. </p>");
    change("d3","<p> Characteristic of Taekwondo, all kicks can be executed as jump kicks, spin kicks, jump spin kicks or multi-rotational spin kicks, and also can be performed by both the front or rear leg in a given stance. Hand strikes are performed as a close distance in a number of ways: from standing, jumping, spinning and rushing forward.Various surfaces of the hand may be engaged as the striking surface depending on which area of the opponents body of which is being targeted </p>");
 
 }else if(input == "tkd" ){

 }
}
start();