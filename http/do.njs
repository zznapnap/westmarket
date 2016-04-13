#!/usr/local/bin/node

var querystring = require('querystring');
var fs = require('fs');

var content = fs.readFileSync('./name.json');
var jsonContent = JSON.parse(content);
var param = querystring.parse(process.env.QUERY_STRING);

console.log('Content-type: text/html; charset=utf-8\n');

var returnName = "Not find";

for(var k in jsonContent.member){
  if(jsonContent.member[k].memberID == param.userID)
  returnName = jsonContent.member[k].memberName;
}
    console.log(returnName);
