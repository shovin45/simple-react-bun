import Bun from 'bun';

const buildConfig = {
  entrypoints: ['src/index.tsx'],
  outdir: './dist',
};
await Bun.build(buildConfig);

const html = `<!doctype html><html><body></body><script src="./index.js"></script></html>`;
await Bun.write(`${buildConfig.outdir}/index.html`, html);
