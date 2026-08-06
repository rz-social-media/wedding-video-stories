import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished wedding film portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ofir &amp; Michael \| RZ Wedding Films<\/title>/i);
  assert.match(html, /Ofir &amp; Michael/);
  assert.match(html, /Play all/i);
  assert.match(html, /Teaser — 4K/);
  assert.match(html, /Short Film — 4K/);
  assert.match(html, /U4dV8gv00k100tBpVS9KrAfxAOPuBd5XskwlHHcdSChak/);
  assert.match(html, /87DnRdS4efJH541k1eIoqx012sy3Lnz900s402UHNaRUew/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("ships the custom fonts and removes starter dependencies", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(packageJson, /@mux\/mux-player-react/);
  assert.match(layout, /RZ Wedding Films/);

  await Promise.all([
    access(new URL("../public/fonts/meno-display.woff2", import.meta.url)),
    access(new URL("../public/fonts/meno-display-light.woff2", import.meta.url)),
    access(new URL("../public/fonts/vogue-demi.woff2", import.meta.url)),
  ]);
});
