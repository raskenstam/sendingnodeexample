



var fs = require('fs');
let string = " ";
let jsarray = [];
let json = {
  "tag": "html",
  "id": 1,
  "children": [{
      "tag": "body",
      "id": 2,
      "parent": 1,
      "html": "\r\n\t",
      "children": [{
          "tag": "div",
          "id": 3,
          "parent": 2,
          "html": "\r\n\t\t"
      }, {
          "tag": "div",
          "id": 4,
          "parent": 2,
          "html": "\r\n\t\t",
          "children": [{
              "tag": "p",
              "id": 5,
              "parent": 4,
              "html": "This is some text."
          }, {
              "tag": "div",
              "id": 6,
              "parent": 4,
              "style": "background-color:lightblue",
              "html": "\r\n\t\t\t\t",
              "children": [{
                  "tag": "h3",
                  "id": 7,
                  "parent": 6,
                  "html": "This is a heading in a div element"
              }, {
                  "tag": "p",
                  "id": 8,
                  "parent": 6,
                  "html": "This is some text in a div element."
              }]
          }, {
              "tag": "p",
              "id": 9,
              "parent": 4,
              "html": "This is some text."
          }]
      }]
  }]
}
//use delet.jsonpath to delet the html without a child and add its variable in an array with all its tag and ids
// todo# creat a method that takes 4 vars tag id parrent and html,
// todo# a loop that goes thro the json until theres no objects left and delet after added to array
// todo# Get the complete code and make it parse to a html with help with jsontohtml or from scatch
// todo# Get a post request with json code that instantly generates html from it.

//mostimportanttodo delete and add to array

let tempjson = json;
console.log(ammountofchildren(tempjson));
  function mainmetod(){
    while(ammountofchildren(tempjson) >0){
      
      for(i in tempjson){
        console.log("temaa" + ammountofchildren[tempjson]);
        console.log("temp" + tempjson[i]);
        if(ammountofchildren(tempjson[i])>0){
          tempjson = tempjson[i];
        }
        else{
          tempjson = json;
        }
        
        
        console.log("tempppp" + ammountofchildren[tempjson]);
      }
    
      
    }
    if(ammountofchildren[tempjson]==0){
      
      
    }
  }

 
  mainmetod();

  
  


function ammountofchildren(a) {
  var b = 0;
  for(var i in a){

    if(i!="atribute"){
      b++;
    }
    
  }
  return b;
}

function addtoarray(tag,id,parrent,html){
  var a = {
    tag:tag,id:id,parent:parrent,html:html
  }
  jsarray.push(a);
}


