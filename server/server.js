const koa = require('koa');
const router = require('koa-router');

const app = new koa();
const _ = new router();

_.get('/test', function(ctx){
  ctx.body = "test successful!";
  console.log('test', ctx);
});

app.use(_.routes()).use(_.allowedMethods());

app.listen(3001);
