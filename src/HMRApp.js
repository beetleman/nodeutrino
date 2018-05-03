/* eslint-disable */
let app;
try {
  app = require('./app').default;
} catch (err) {
  console.error(err);
  app = () => err.message;
}
export default app;
