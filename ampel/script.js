function switchOff(){
console.log("ist drin");
document.getElementById('demo').innerHTML = "Ampel aus";
document.getElementById('roteins').style.backgroundColor="grey";
}

var isRed=true;
var isYellow=false;
var isGreen=false;

function ampel(){

  var d=setInterval(switchLights, 2000);
}

function switchLights(){

  if(isRed){
    document.getElementById('roteins').style.backgroundColor="grey";
    isRed=false;
  }else{
    document.getElementById('roteins').style.backgroundColor="red";
    isRed=true;
  }

  if(isYellow){
    document.getElementById('gelbeins').style.backgroundColor="grey";
    isYellow=false;
  }else{
    document.getElementById('gelbeins').style.backgroundColor="yellow";
    isYellow=true;
  }

  if(isGreen){
    document.getElementById('grueneins').style.backgroundColor="grey";
    isGreen=false;
  }else{
    document.getElementById('grueneins').style.backgroundColor="green";
    isGreen=true;
  }


}
