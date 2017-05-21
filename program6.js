/*
PARAM PAM PAM
 Exercise 6 of 8

Create an Express.js server that processes PUT '/message/:id' requests.

For instance:

    PUT /message/526aa677a8ceb64569c9d4fb

As a response to these requests, return the SHA1 hash of the current date
plus the sent ID:

    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')

-------------------------------------------------------------------------------

## HINTS

To handle PUT requests use:

    app.put('/path/:NAME', function(req, res){...});

To extract parameters from within the request handlers, use:

    req.params.NAME


 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help

*/

var express = require('express')
var path = require('path')
var app = express()
var crypto = require('crypto');
      


var portz = process.argv[2];
var publicPath = process.argv[3];

app.use(express.static(publicPath||path.join(__dirname, 'public')));
app.use(require('stylus').middleware(publicPath||(__dirname + '/public')));


app.put('/message/:id', function(req, res){
    var id =  req.params.id;
    
    var returnString = crypto.createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
      
      res.send(returnString);
});
    
//console.log('Port ' + process.argv[2]);
if(!portz){
  portz = process.env.PORT;
}


app.listen(portz||3000);