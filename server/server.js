const koa = require('koa');
const router = require('koa-router')();
const koabody = require('koa-body')();

const app = new koa();

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
router.get('/exercises',  (ctx) => {
  ctx.body = data;
});

// update an exercise
router.post('/exercise/:id', koabody, (ctx) =>  {
  const id = ctx.params.id;
  const exercise = ctx.request.body;

  data = data.map((item) => {
    if( item.id == id) {
      return Object.assign({}, exercise);
    }

    return Object.assign({}, item);
  });

  ctx.body = exercise;
});

// add a new exercise
router.put('/exercise',  koabody, (ctx) => {
  const exercise = ctx.request.body;
  const id = {id: data.length + 1};

  const newExercise = [exercise, id].reduce((target, source) => Object.assign(target, source));

  data[data.length] = newExercise;

  ctx.body = newExercise;
  
});

app.use(router.routes()).use(router.allowedMethods());

//TODO: better error handler
app.on('error', err => {
  console.log(err);
})

app.listen(3001);
