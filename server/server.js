const koa = require('koa');
const router = require('koa-router');
const koabody = require('koa-body')();

const app = new koa();
const _ = new router();

// temporary until we get a real data store in place...
let data = [
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

// gets all exercises
_.get('/exercises',  (ctx) => {
  ctx.body = data;
});

// update an exercise
_.post('/exercise/:id', koabody, (ctx) =>  {
  const id = ctx.params.id;
  const exercise = ctx.request.body;

  data = data.map((item) => {
    if( item.id == id) {
      return Object.assign({}, exercise);
    }

    return Object.assign({}, item);
  });

  console.log('data: ', data);

  ctx.body = exercise;
});

// add a new exercise
_.put('/exercise',  (ctx) => {
});

app.use(_.routes()).use(_.allowedMethods());

app.on('error', err => {
  console.log(err);
})

app.listen(3001);
