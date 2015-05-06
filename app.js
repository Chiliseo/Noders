var express = require('express');
var ghost = require('./blog/core/');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/',function (req,res) {
	res.send("Hola Adriano")
});
var blog = ghost({
    contentDirectory: "./blog/content"
});

app.use(blog.middleware({
    urlRoot: "/blog"
}));
app.listen(app.get('port'));