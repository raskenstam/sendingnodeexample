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
var currenthtmlstring;
console.log(dasdasd);
console.log("/\r\n\t/");
var howdeep = 0;
function test(x) {
  howdeep++;
  console.log("howdeep" + howdeep + " " + x);
  var gotchild = false;
  var gotid = false;
  for (i in x) {
    if (i == "children") {
      gotchild = true;

      for (b in x.children) {

        if (x.children[b].id > 0) {

          if (ammountofchildren(x.children[b].children) > 0) {
            //incursion
            console.log("array " + x.children[b].tag, x.children[b].id, x.children[b].parent, x.children[b].html);
            test(x.children[b]);

          }
          else {

            console.log("x.children = " + x.children + "x.children[b].id " + x.children[b].id);
            console.log("array " + x.children[b].tag, x.children[b].id, x.children[b].parent, x.children[b].html);
            //means that its the end of the line
            addtoarray(x.children[b].tag, x.children[b].id, x.children[b].parent, x.children[b].html);
          }

        }



      }
    }
    if (i == "id") {
      gotid = true;
    }

  }

  if (gotid == true) {
    addtoarray(x.tag, x.id, x.parent, x.html);
    console.log("addtoarray");

  }


}
test(json);
for (xd in jsarray) {
  console.log("test" + jsarray[xd].id + " " + jsarray[xd].tag);
}


/*
  make the code not count the children thats already been added to the array

*/
let tempjson = json;
console.log(tempjson.children[0].children[0].id);
function mainmetod(x) {
  for (i in x) {

    console.log("ddd" + x[i] + i + x);
    if (ammountofchildren(x[i]) > 0) {
      console.log("cont" + x[i]);
      mainmetod(x[i].children);

    }
    else {
      console.log("end" + x[i] + i + x);
    }

  }

}
//mainmetod(tempjson);
function ammountofchildren(a) {
  var b = 0;
  for (var i in a) {
    b++;
  }
  return b;
}
function addtoarray(tag, id, parrent, html) {
  var a = {
    tag: tag, id: id, parent: parrent, html: html
  }
  jsarray.push(a);
}
function maxchildren(){
  var highestnest= 0;
  for(i in jsarray){
    if(jsarray[i].parrent>highestnest){
      highestnest = jsarray[i].parrent;
    }
  }
}
function howmanygotparrent(x) {
  var a = 0;
  for (var i in jsarray) {
    if(jsarray[i].parrent==x){
          a++;
    }

  }
  return a;
}
//check for with and depth and add out } accordingly
function createjson(currentid) {
  while (checkifarraygotchildren() > 0) {
    for (var i in jsarray) {
        if(jsarray[i].id==currentid){
          if(howmanygotparrent==0){
            //placeout}
          }
          
        }
    }
  }
}



