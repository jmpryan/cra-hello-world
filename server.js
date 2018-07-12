var serve = require('koa-static');
var koa = require('koa');
var app = new koa();

app.use(serve('./build'));

app.listen(3003);