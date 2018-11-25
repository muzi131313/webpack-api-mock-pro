
const path = require('path');
const Koa = require('koa');
const apiMocker = require('../../');

const app = new Koa();

app.use(
  apiMocker(
    app,
    path.resolve('./mocker/index.js')
  )
)
app.listen(8080);
console.log('=> http://localhost:8080')

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
});
