var express = require('express'),
    app = express();

 var CLIENT_ID = '0b78f1a5b2c678faa54c';
 var CLIENT_SECRET = '90dee2a928f7fc38c67b27f45ddaee25cc29d413';

//google
 //var CLIENT_ID = '976429715733-i8tn5siu4bc6crba9564tvv2u9dukkan.apps.googleusercontent.com';
 //var CLIENT_SECRET = 'W24ceQ3pVrXIAfhjXMF1KU03';

 var oauth2 = require('simple-oauth2')({
   clientID: CLIENT_ID,
   clientSecret: CLIENT_SECRET,
   site: 'https://github.com/login',
   tokenPath: '/oauth/access_token',
   authorizationPath: '/oauth/authorize'
 });

 // Authorization uri definition
 var authorization_uri = oauth2.authCode.authorizeURL({
   redirect_uri: 'http://localhost:3000/callback',
   scope: 'notifications',
   state: '3(#0/!~'
 });

 // Initial page redirecting to Github
 app.get('/auth', function (req, res) {
     console.log('/auth');
     res.redirect(authorization_uri);
 });

 // Callback service parsing the authorization token and asking for the access token
 app.get('/callback', function (req, res) {
   var code = req.query.code;
   console.log('/callback');
   oauth2.authCode.getToken({
     code: code,
     redirect_uri: 'http://localhost:3000/callback'
   }, saveToken);

   function saveToken(error, result) {
     console.log('save token');
     console.log('result : ' + result);
     if (error) { console.log('Access Token Error', error.message); }
     token = oauth2.accessToken.create(result);
     res.redirect('/ok');
   }
 });

 app.get('/', function (req, res) {
   res.send('Hello<br><a href="/auth">Log in with Github</a>');
 });

 app.get('/ok',function (req, res) {
   res.send('authorized');
 });

 app.listen(3000);

 console.log('Express server started on port 3000');
