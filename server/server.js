const koa = require('koa');
const router = require('koa-router');

const app = new koa();
const _ = new router();

const defaultData = [
  {
    id: 1,
    name: 'Sit-ups',
    date: Date.now(),
    amount: 10,
  },
  {
    id: 2,
    name: 'Push-ups',
    date: Date.now(),
    amount: 20,
  }
];

_.get('/exercises', function(ctx){
  ctx.body = defaultData;
});

app.use(_.routes()).use(_.allowedMethods());

app.listen(3001);
