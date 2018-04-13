
var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json"
var req = new Request(coinURL);

fetch(req)
.then(function(response) {
    fetch(response.url).then(function(response) {
        console.log(response.url);
    })
});

