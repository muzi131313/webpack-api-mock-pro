const BASE_URL = '/api/userinfo';

const release = {
  [`GET ${BASE_URL}/:id`]: (ctx, next) => {
    const res = ctx.response;
    const req = ctx.request;
    // console.log('---->', req.params)
    ctx.body = {
      id: 1,
      username: 'kenny',
      sex: 6
    };
  }
}

module.exports = release
