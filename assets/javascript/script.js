(function (b, i, t, C, O, I, N) {
    window.addEventListener('load', function () {
        if (b.getElementById(C)) return;
        I = b.createElement(i), N = b.getElementsByTagName(i)[0];
        I.src = t;
        I.id = C;
        N.parentNode.insertBefore(I, N);
    }, false)
})(document, 'script', 'https://widgets.bitcoin.com/widget.js', 'btcwdgt');
var sign = 0

var config = {
    apiKey: "AIzaSyAgzmeiqbqq8dTCmoZC2bbirDi56UaYRMY",
    authDomain: "bitcoin-93d8e.firebaseapp.com",
    databaseURL: "https://bitcoin-93d8e.firebaseio.com",
    projectId: "bitcoin-93d8e",
    storageBucket: "bitcoin-93d8e.appspot.com",
    messagingSenderId: "1004449441010"
};
firebase.initializeApp(config);
console.log('i am here')



function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log('i ma here')
        //console.log(Popup);
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log('can you access the token');
        // The signed-in user info.
        var user = result.user;

        console.log("sign in");
        $(".signIn").text("Hello"+user.displayName);
        console.log(user);
        // ...
    });
};

var url1 = 'https://newsapi.org/v2/everything?' +
    'q=bitcoin&' +
    'from=' + moment().format('L') + '&' +
    'sortBy=popularity&' +
    'apiKey=4a933268eadd4054ad084e87571eedac';
var req = new Request(url1);
fetch(req)
    .then(function (response) {
        console.log("heya");
        console.log(response);

        $.ajax({
            url: response.url,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (let i = 0; i < response.articles.length; i++) {
                var newdiv = $("<div>");
                newdiv.css("border", ".5px lightgrey solid");
                var Aurl = $("<a>");
                Aurl.attr("href", response.articles[i].url);
                var title = response.articles[i].title;
                Aurl.text(title);
                Aurl.css("padding", "10px");
                var image = $("<img>");
                image.attr("src", response.articles[i].urlToImage);
                image.css("width", "15%");
                var space = $("<p>");
                space.css("height", "3%");
                newdiv.prepend("<p>");
                newdiv.prepend(Aurl);
                newdiv.prepend(image);
                newdiv.prepend(space);
                $("#newdiv").append(newdiv);

            }
        });
    });
$(document).ready(function () {
    $(".btcwdgt-chart").addClass("charted");
})