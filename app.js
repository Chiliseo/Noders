// var express = require('express');
// var app = express();
// var http = require('http');
// var server = http.createServer(app);
// var ghost = require('ghost');ghost();
// app.set('port', process.env.PORT || 3000);
// var path = require('path');
// // app.get('/',function (req,res) {
// // 	res.send("Hola Adriano")
// // });
// ghost({
//   config: path.join(__dirname, 'config.js')
// });
// ghost().then(function (ghostServer) {
//     //app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
// 	app.use('/blog', ghostServer.rootApp);
// 	ghostServer.start(app);
// });
// //app.listen(app.get('port'));
var path = require('path');
var express = require('express');
var ghost   = require('ghost');
var parentApp = express();
//var port = process.env.PORT || 4000;
//parentApp.set('port', process.env.PORT || 3000);
// parentApp.get('/test', function (req, res) {
//     res.send('Test Page');
// });

// fallback to ghost if a route isn't matched
ghost({config: path.join(__dirname, 'config.js')}).then(function (ghostServer) {
//ghost().then(function (ghostServer) {
    parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
    ghostServer.start();
}).catch(function(err) {
  errors.logErrorAndExit(err, err.context, err.help);
});

// if (!module.parent) {  
//   parentApp.listen(port);
//   console.log('Express app started on port '+port);
// }
//parentApp.listen(parentApp.get('port'));
