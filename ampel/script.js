function Ampel(ampel,start){
  this.ampel=ampel;
  this.state=start;
  this.greenLight=false;
  this.yellowLight=false;
  this.redLight=false;
  this.off="grey";
}

Ampel.prototype.getState = function () {
    return this.state;
};
Ampel.prototype.switchState = function () {
    document.getElementById('rot'+this.ampel).style.backgroundColor=this.off;
    document.getElementById('gelb'+this.ampel).style.backgroundColor=this.off;
    document.getElementById('gruen'+this.ampel).style.backgroundColor=this.off;
    this.state++;
    console.log("start: "+this.state);
    if(this.state==1){
      console.log("red: "+this.state);
      this.greenLight=false;
      this.yellowLight=false;
      this.redLight=true;
    }else if(this.state==2){
      console.log("yellow: "+this.state);
      this.greenLight=false;
      this.yellowLight=true;
      this.redLight=false;
    } else if(this.state==3){
      console.log("green: "+this.state);
      this.greenLight=true;
      this.yellowLight=false;
      this.redLight=false;
    } else if(this.state==4){
      console.log("yellow two: "+this.state);
      this.greenLight=false;
      this.yellowLight=true;
      this.redLight=false;
      this.state=0;
    }
    if(this.redLight)
      document.getElementById('rot'+this.ampel).style.backgroundColor="red";
    if(this.yellowLight)
      document.getElementById('gelb'+this.ampel).style.backgroundColor="yellow";
    if(this.greenLight)
      document.getElementById('gruen'+this.ampel).style.backgroundColor="green";

};


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

function ampelfunc(){
  ampel1=new Ampel("eins",1);
  ampel2=new Ampel("zwei",3);
  var d=setInterval(switchLights, 2000);
}


function switchLights(){
  ampel1.switchState();
  ampel2.switchState();
}

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            //elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
