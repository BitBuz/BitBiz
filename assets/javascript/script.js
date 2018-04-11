

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
$("#newdiv").text(response);

});

