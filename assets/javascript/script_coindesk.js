
var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
var req = new Request(coinURL);

fetch(req)
.then(function(response) {
    fetch(response.url).then(function(response) {
        console.log(response.url);
        
    });
});

$('.content').hide();

  // Auth using a popup.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

$(document).on('click', '.signIn', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     $('.content').show();
     loggedIn();
     
    });
    $(this).removeClass('signIn')
    .addClass('signOut')
    .html('Sign Out Of Google');
});

$(document).on('click', '.signOut', function () {
  firebase.auth().signOut().then(function() {
    $('.content').hide();
  }, function(error) {
    // An error happened.
  });
  $(this).removeClass('signOut')
    .addClass('signIn')
    .html('Sign In With Google To See Schedule');
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