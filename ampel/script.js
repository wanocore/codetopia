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
}
