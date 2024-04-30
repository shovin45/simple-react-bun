import Bun from 'bun';

import { routerFn } from './router';

Bun.serve({
  port: 8888, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000

  fetch(request: Request) {
    const url = new URL(request.url);
    return routerFn(url);
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      status: 404,
      statusText: 'Not Found',
      headers: { 'Content-Type': 'text/html' },
    });
  },
});
