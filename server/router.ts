import Bun from 'bun';

export const routerFn = (url: URL) => {
  switch (url.pathname) {
    case '/index.js':
      return new Response(Bun.file('./dist/index.js'), {
        status: 200,
        headers: { 'Content-Type': 'application/javascript' },
      });
    case '/':
      return new Response(Bun.file('./dist/index.html'), {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
    default:
      throw new Error('404');
  }
};
