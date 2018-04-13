

var url = 'https://newsapi.org/v2/everything?' +
'q=Bitcoin&' +
'from='+moment().format('L')+'&' +
'sortBy=popularity&' +
'apiKey=4a933268eadd4054ad084e87571eedac';

var req = new Request(url);

fetch(req)
.then(function(response) {
console.log(response.url);
console.log(moment());
});
var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json"
var req = new Request(coinURL);

fetch(req)
.then(function(response) {
    fetch(response.url).then(function(response) {
        console.log(response.url);
    })
});

