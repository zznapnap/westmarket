var express = require('express');
var fs = require('fs');
var app = express();

var content = fs.readFileSync('./name.json');
var jsonContent = JSON.parse(content);


app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendFile('index.hml');
  });
app.get('/do', function(req, res) {

  var returnName = "Not find";
  for(var k in jsonContent.member){
  	if(jsonContent.member[k].memberID == req.query.userID)
  	returnName = jsonContent.member[k].memberName;
  }
res.send(returnName);
});
  app.listen(1111, function () {
    console.log('Example app listening on port 1111!');
    });
