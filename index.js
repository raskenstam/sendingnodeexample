const express = require('express')
const app = express()
const port = 3000



var fs = require('fs');
let string = " ";
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

console.log(json.children[0].children);



function ammountofchildren(a) {
  var b = 0;
  for(var i in a){

    if(i!="atribute"){
      b++;
    }
    
  }
  return b;
}
 




app.get('/', function (req, res) {




  res.send('Hello World!')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))