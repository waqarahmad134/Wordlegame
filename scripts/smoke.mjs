// End-to-end route smoke test. Hits every page/route and the SEO endpoints,
// asserting status codes and key markers. Usage: node scripts/smoke.mjs [baseUrl]
const BASE = process.argv[2] || "http://localhost:3000";

const LOCALES = [
  "en", "en-gb", "es", "fr", "de", "pt", "it", "nl", "ru", "pl", "sv", "tr", "id",
];
const MODE_PATHS = [
  "", "/unlimited", "/custom", "/multiplayer", "/sedecordle", "/connect",
  "/squares", "/solver", "/archive", "/about",
];
const LENGTHS = [4, 5, 6, 7, 8, 9, 10, 11];

let pass = 0;
let fail = 0;
const failures = [];

async function check(name, fn) {
  try {
    await fn();
    pass++;
  } catch (e) {
    fail++;
    failures.push(`${name}: ${e.message}`);
  }
}

async function get(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
  const body = res.status < 400 ? await res.text() : "";
  return { status: res.status, body, headers: res.headers };
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

async function main() {
  // Root redirects to default locale.
  await check("/ redirects", async () => {
    const r = await get("/");
    assert([307, 308].includes(r.status), `expected redirect, got ${r.status}`);
  });

  // Home in every locale renders the board + keyboard.
  for (const loc of LOCALES) {
    await check(`/${loc} home`, async () => {
      const r = await get(`/${loc}`);
      assert(r.status === 200, `status ${r.status}`);
      assert(r.body.includes("class=\"tile"), "no board tiles");
      assert(r.body.includes('aria-label="Enter"'), "no keyboard");
    });
  }

  // Every mode page for English.
  for (const p of MODE_PATHS) {
    await check(`/en${p}`, async () => {
      const r = await get(`/en${p}`);
      assert(r.status === 200, `status ${r.status}`);
    });
  }

  // Every word-length variant.
  for (const n of LENGTHS) {
    await check(`/en/${n}-letters`, async () => {
      const r = await get(`/en/${n}-letters`);
      assert(r.status === 200, `status ${r.status}`);
    });
  }

  // Invalid variant 404s.
  await check("/en/12-letters 404", async () => {
    const r = await get("/en/12-letters");
    assert(r.status === 404, `status ${r.status}`);
  });

  // Custom play link round-trips.
  await check("custom play link", async () => {
    const token = Buffer.from(JSON.stringify({ w: "plumb" }), "utf8").toString("base64url");
    const r = await get(`/en/play/${token}`);
    assert(r.status === 200, `status ${r.status}`);
    assert(r.body.includes('aria-label="Enter"'), "no board on play page");
  });
  await check("garbage play link 404", async () => {
    const r = await get("/en/play/%21%21bad");
    assert(r.status === 404, `status ${r.status}`);
  });

  // Archive date page.
  await check("archive date", async () => {
    const r = await get("/en/archive/2025-01-15");
    assert(r.status === 200, `status ${r.status}`);
  });

  // Multiplayer API flow.
  let code, pid;
  await check("create room", async () => {
    const res = await fetch(`${BASE}/api/room`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: "en", length: 5 }),
    });
    const data = await res.json();
    code = data.code;
    assert(/^[A-Z0-9]{5}$/.test(code), `bad code ${code}`);
  });
  await check("join + guess + state", async () => {
    const j = await (await fetch(`${BASE}/api/room/${code}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: "Smoke" }),
    })).json();
    pid = j.playerId;
    assert(pid, "no playerId");
    const g = await (await fetch(`${BASE}/api/room/${code}/guess`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: pid, guess: "crane" }),
    })).json();
    assert(g.ok, `guess rejected: ${g.error}`);
    assert(g.state.players[0].patterns[0].length === 5, "no pattern");
  });
  await check("room page renders", async () => {
    const r = await get(`/en/room/${code}`);
    assert(r.status === 200, `status ${r.status}`);
  });

  // SEO endpoints.
  await check("sitemap.xml", async () => {
    const r = await get("/sitemap.xml");
    assert(r.status === 200, `status ${r.status}`);
    assert(r.body.includes("<urlset"), "not a sitemap");
  });
  await check("robots.txt", async () => {
    const r = await get("/robots.txt");
    assert(r.status === 200, `status ${r.status}`);
    assert(r.body.toLowerCase().includes("sitemap"), "no sitemap ref");
  });
  await check("llms.txt", async () => {
    const r = await get("/llms.txt");
    assert(r.status === 200, `status ${r.status}`);
    assert(r.body.includes("# Wordle Game"), "bad llms.txt");
  });
  await check("opengraph-image", async () => {
    const r = await get("/en/opengraph-image");
    assert(r.status === 200, `status ${r.status}`);
    assert((r.headers.get("content-type") || "").includes("image"), "not an image");
  });

  // SEO tags on the home page.
  await check("home SEO tags", async () => {
    const r = await get("/en");
    assert(r.body.includes('property="og:title"'), "no og:title");
    assert(r.body.includes('property="og:image"'), "no og:image");
    assert(r.body.includes('name="twitter:card"'), "no twitter card");
    assert(r.body.includes('rel="canonical"'), "no canonical");
    // Next serializes the JSX attribute as hrefLang; HTML attributes are
    // case-insensitive, so match either casing.
    assert(/hreflang="es-ES"/i.test(r.body), "no hreflang alternates");
    assert(r.body.includes('property="og:image"'), "no og:image");
    assert(r.body.includes("application/ld+json"), "no JSON-LD");
  });

  console.log(`\nSmoke test: ${pass} passed, ${fail} failed`);
  if (fail) {
    console.log("\nFailures:");
    for (const f of failures) console.log("  ✗ " + f);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
