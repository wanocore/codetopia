function switchOff(){
console.log("ist drin");
document.getElementById('demo').innerHTML = "Ampel aus";
document.getElementById('roteins').style.backgroundColor="grey";
}

function gelban (){
  document.getElementById('gelbeins').style.backgroundColor="yellow";
  document.getElementById('gelbzwei').style.backgroundColor="yellow";
}

function gelbaus (){
  document.getElementById('gelbeins').style.backgroundColor="grey";
  document.getElementById('gelbzwei').style.backgroundColor="grey";
}
