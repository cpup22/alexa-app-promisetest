This repo is created to show a simple example of issue # 281 for the alexa-app npm module

https://github.com/alexa-js/alexa-app/issues/281

According to the docs, to return an asyn response code such as the following is required:

```
app.intent("checkStatus", function(request, response) {
  // `getAsync` returns a Promise in this example. When 
  // returning a Promise, the response is sent after it 
  // resolves. If rejected, it is treated as an error. 
  return http.getAsync("http://server.com/status.html").then(function (rc) {
    response.say(rc.statusText);
  });
});
```

But I am having issues getting the .then method to trigger and my Alexa skills are timing out. This is a very basic promise similar to what I'm trying to do.