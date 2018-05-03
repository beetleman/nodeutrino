import { createServer } from 'http';
import app from './HMRApp';

const port = process.env.PORT || 3000;

createServer((request, response) => response.end(app()))
  .listen(port, () => process.stdout.write(`Running on :${port}\n`));

if (module.hot) {
  module.hot.accept('./HMRApp');
}
