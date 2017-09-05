var express = require("express");
var alexa = require("alexa-app");
var express_app = express();
var path = require('path');


// Define an alexa-app
var app = new alexa.app('promisetest');

app.launch(async function(req, res) {
  try {
    console.log('stub A');
    let message = await promisetest(req, res)
    console.log('stub B:', message.message);
    res.say(message.message).send();
    res.shouldEndSession(false);
  } catch(er) {
    console.error('failed to call promise:', er)
  }
 
  res.say('OK').send();
})
 
function promisetest(req, res){
  //linkGoogleAccount(req, res, gotUser);
  return new Promise(function(resolve, reject){
    setTimeout(
      function() {
        console.log("*******calling promise in promisetest")
        resolve({"message":"Promise worked"})
    }, 0)
  })
}

app.express({ expressApp: express_app, router: express.Router() });
console.log(app.utterances());

express_app.listen("3000");