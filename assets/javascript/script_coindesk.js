var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
var req = new Request(coinURL);

fetch(req)
.then(function(response) {
    fetch(response.url).then(function(response) {
        console.log(response.url);
        
    });
});

var config = {
  apiKey: "AIzaSyBCC89dBBRgSrtYp8yJeT_X8U-dZJJ7IiQ",
  authDomain: "bitbuzz-83269.firebaseapp.com",
  databaseURL: "https://bitbuzz-83269.firebaseio.com",
  projectId: "bitbuzz-83269",
  storageBucket: "",
  messagingSenderId: "319589480030"
};

firebase.initializeApp(config);

$('#client').hide();

  // Auth using a popup.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

$(document).on('click', '.signIn', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token, a googleapi
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     $('#client').show();
     loggedIn();
     
    });
    $(this).removeClass('signIn')
    .addClass('signOut')
    .html('Sign Out Of Google');
});


$(document).on('click', '.signOut', function () {
  firebase.auth().signOut().then(function() {
    $('#client').hide();
  }, function(error) {
    // An error happened.
  });
  $(this).removeClass('signOut')
    .addClass('signIn')
    .html('Sign In With Google!');
});



function loggedIn() {

  // Declare variables
  var dataRef = firebase.database();
  var editTrainKey = '';
  var fbTime = moment();
  var newTime;
  $('.submit').on('click', function(e) {

    e.preventDefault();
    // Grab input values
    });

};