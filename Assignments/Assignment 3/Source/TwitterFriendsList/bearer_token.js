var R = require("request");
var key = "KD0DXHj6okcdpOmP0u3rFhOey";
var secret = "z2ABZBQ0RM0l9spZMovcQE0pUX4hV7toIiIw85zD2vEmPILFZa";
var cat = key +":"+secret;
var credentials = new Buffer(cat).toString('base64');

var url = 'https://api.twitter.com/oauth2/token';
R({ url: url,
    method:'POST',
    headers: {
        "Authorization": "Basic "+ credentials,
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: "grant_type=client_credentials"

}, function(err, resp, body) {
    console.dir(body); //the bearer token...
});

