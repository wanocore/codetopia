function switchOff(){
console.log("ist drin");
document.getElementById('demo').innerHTML = "Ampel aus";
document.getElementById('roteins').style.backgroundColor="grey";
}


function rotan(){
  document.getElementById('roteins').style.backgroundColor="red";
  document.getElementById('rotzwei').style.backgroundColor="red";
}

function rotaus(){
  document.getElementById('roteins').style.backgroundColor="grey";
  document.getElementById('rotzwei').style.backgroundColor="grey";
}

function gelban(){
  document.getElementById('gelbeins').style.backgroundColor="yellow";
  document.getElementById('gelbzwei').style.backgroundColor="yellow";
}

function gelbaus(){
  document.getElementById('gelbeins').style.backgroundColor="grey";
  document.getElementById('gelbzwei').style.backgroundColor="grey";
}

function gruenan(){
  document.getElementById('grueneins').style.backgroundColor="green";
  document.getElementById('gruenzwei').style.backgroundColor="green";
}

function gruenaus(){
  document.getElementById('grueneins').style.backgroundColor="grey";
  document.getElementById('gruenzwei').style.backgroundColor="grey";
}
var phase=1;

function ampel(){

  var d=setInterval(switchLights, 2000);
}


function switchLights(){
  if(phase==1){
    console.log("P1: "+phase);
    document.getElementById('roteins').style.backgroundColor="red";
    document.getElementById('gelbeins').style.backgroundColor="grey";
    document.getElementById('grueneins').style.backgroundColor="grey";
    phase++;
  }else if(phase==2){
    console.log("P2: "+phase);
    document.getElementById('roteins').style.backgroundColor="grey";
    document.getElementById('gelbeins').style.backgroundColor="yellow";
    document.getElementById('grueneins').style.backgroundColor="grey";
    phase++;
  }else if(phase==3){
    console.log("P3: "+phase);
    document.getElementById('roteins').style.backgroundColor="grey";
    document.getElementById('gelbeins').style.backgroundColor="grey";
    document.getElementById('grueneins').style.backgroundColor="green";
    phase++;
  }else if(phase==4){
    console.log("P4: "+phase);
    document.getElementById('roteins').style.backgroundColor="grey";
    document.getElementById('gelbeins').style.backgroundColor="yellow";
    document.getElementById('grueneins').style.backgroundColor="grey";
    phase=1;
  }

}
