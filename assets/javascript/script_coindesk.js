
<<<<<<< HEAD
var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json"
=======
var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
>>>>>>> ebe85ffa7030e661658465c480e0f646bedab183
var req = new Request(coinURL);

fetch(req)
.then(function(response) {
    fetch(response.url).then(function(response) {
        console.log(response.url);
    });
});

