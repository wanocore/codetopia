function switchOff(){
console.log("ist drin");
document.getElementById('demo').innerHTML = "Ampel aus";
document.getElementById('roteins').style.backgroundColor="grey";
}


function rotan (){
  document.getElementById('roteins').style.backgroundColor="red";
  document.getElementById('rotzwei').style.backgroundColor="red";
}

function rotaus (){
  document.getElementById('roteins').style.backgroundColor="grey";
  document.getElementById('rotzwei').style.backgroundColor="grey";
}

function gelban (){
  document.getElementById('gelbeins').style.backgroundColor="yellow";
  document.getElementById('gelbzwei').style.backgroundColor="yellow";
}

function gelbaus (){
  document.getElementById('gelbeins').style.backgroundColor="grey";
  document.getElementById('gelbzwei').style.backgroundColor="grey";
}

function gruenan (){
  document.getElementById('grueneins').style.backgroundColor="green";
  document.getElementById('gruenzwei').style.backgroundColor="green";
}

function gruenaus (){
  document.getElementById('grueneins').style.backgroundColor="grey";
  document.getElementById('gruenzwei').style.backgroundColor="grey";

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
