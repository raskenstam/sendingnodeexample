

console.log(json);
function ammountofchildren(a) {
    var b = 0;
    for(var i in a){
  
      if(i!="atribute"){
        b++;
      }
      
    }
    return b;
  }