// Builds public/figures/agent-flow.html, the interactive figure in
// src/content/posts/how-i-manage-my-agent-workflow.mdx.
//
// Uses the anatomy skill's kit. Run with:
//   node scripts/figures/agent-flow.mjs
// Set ANATOMY_DIR if the skill lives somewhere other than ~/.agents/skills/anatomy.
import { mkdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SKILL = process.env.ANATOMY_DIR ?? join(homedir(), ".agents/skills/anatomy");
const k = await import(pathToFileURL(join(SKILL, "kit/iso-kit.mjs")).href);
const { kitScript } = await import(pathToFileURL(join(SKILL, "scripts/inline-kit.mjs")).href);

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "../../public/figures/agent-flow.html");

// ---------- World plan (x right, y toward the front, z up) ----------
const WIDTH = 600;
const HEIGHT = 400;
const PLATE = { x: -164, y: -116, w: 328, d: 210, r: 10 };
const PLATE_H = 12;
const FOOT_H = 5;

const STATION_H = 6;
const HUB = { x: -80, y: 0, r: 18, h: 7 };
const BUS_IN = -40;
const BUS_OUT = 50;
const BYPASS_Y = -104;
const ESC_X = -30;

const WORKERS = [
  { id: "scout", model: "haiku", y: -72 },
  { id: "sonic", model: "haiku", y: -36 },
  { id: "frontend", model: "sonnet", y: 0 },
  { id: "task", model: "deepseek flash", y: 36 },
  { id: "deep-task", model: "sonnet", y: 72 },
].map((w) => ({ ...w, plan: { x: -26, y: w.y - 12, w: 52, d: 24, r: 2 } }));
const W = Object.fromEntries(WORKERS.map((w) => [w.id, w]));
const REVIEW = { x: 66, y: -16, w: 40, d: 32, r: 2 };
const INBOX = { x: -154, y: -18, w: 32, d: 36, r: 2.5 };
const OUTBOX = { x: 122, y: -18, w: 32, d: 36, r: 2.5 };
const TRAY_H = 4;

const P = k.fitProjection(
  [...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0), [HUB.x, HUB.y, HUB.h + 4]],
  WIDTH,
  HEIGHT,
  { pad: 10, azimuth: 40 },
);

const at = (point) => k.iso(point, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const T = (xy, z, text, size, tone = "lo") =>
  k.faceTextSvg(k.topMatrix(xy, z, P, "x"), text, { size, tone, anchor: "middle" });
const byDepth = (points) => [...points].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));
const centreOf = (plan) => [plan.x + plan.w / 2, plan.y + plan.d / 2];

// ---------- Channels: grooves the token runs along ----------
const CHANNELS = [
  [[INBOX.x + INBOX.w, 0], [HUB.x - HUB.r - 3, 0]],
  [[HUB.x + HUB.r + 3, 0], [BUS_IN, 0]],
  [[BUS_IN, -72], [BUS_IN, 72]],
  ...WORKERS.map((w) => [[BUS_IN, w.y], [w.plan.x, w.y]]),
  ...WORKERS.slice(1).map((w) => [[w.plan.x + w.plan.w, w.y], [BUS_OUT, w.y]]),
  [[BUS_OUT, -36], [BUS_OUT, 72]],
  [[BUS_OUT, 0], [REVIEW.x, 0]],
  [[REVIEW.x + REVIEW.w, 0], [OUTBOX.x, 0]],
  [[HUB.x, HUB.y - HUB.r - 3], [HUB.x, BYPASS_Y], [OUTBOX.x + OUTBOX.w / 2, BYPASS_Y], [OUTBOX.x + OUTBOX.w / 2, OUTBOX.y]],
];
const ESCALATION = [[W.task.plan.x, 40], [ESC_X, 40], [ESC_X, 68], [W["deep-task"].plan.x, 68]];
const JUNCTIONS = [
  [BUS_IN, 0], [BUS_IN, -36], [BUS_IN, 36], [BUS_OUT, 0], [BUS_OUT, 36],
  [BUS_IN, -72], [BUS_IN, 72], [BUS_OUT, -36], [BUS_OUT, 72],
  [HUB.x, BYPASS_Y], [OUTBOX.x + OUTBOX.w / 2, BYPASS_Y], [ESC_X, 40], [ESC_X, 68],
];

function plate() {
  const out = [`<path class="iso-halo" d="${k.haloOf(PLATE, -PLATE_H - FOOT_H, PLATE_H, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(PLATE, 24))) {
    out.push(S(k.cylinder(x, y, 8, -PLATE_H - FOOT_H, 1.6, P, 28), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 6.2, -PLATE_H - FOOT_H + 1.6, FOOT_H - 1.6, P, 28), { tone: "mid" }));
  }
  out.push(S(k.slabOf(PLATE, -PLATE_H, PLATE_H, P, 8, 1.6), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(PLATE, 5), 0, P), { tone: "lo" }));
  const screws = k.corners(PLATE, 11);
  out.push(L(screws.map(([x, y]) => k.ring(x, y, 2.4, 0, P, 16)).join(""), { tone: "lo" }));
  out.push(D(screws.map(([x, y]) => at([x, y, 0])), { size: 0.5 }));

  // Ruler strip along the front edge.
  const strip = { x: -96, y: PLATE.y + PLATE.d - 15, w: 230, d: 7, r: 1 };
  out.push(S(k.slabOf(strip, 0, 0.6, P, 3), { tone: "lo", crease: "none" }));
  const ticks = k.topTicks(strip.x + 4, strip.x + strip.w - 4, 4, 5, strip.y + 0.8, 0.6, [2, 3.6], P);
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }));
  out.push(D([at([strip.x + 2, strip.y + 3.5, 0.6]), at([strip.x + strip.w - 2, strip.y + 3.5, 0.6])], { size: 0.45 }));

  // Label plate, back left: three rule lines for printed text.
  const label = { x: PLATE.x + 16, y: PLATE.y + PLATE.d - 26, w: 40, d: 18, r: 1.4 };
  out.push(S(k.slabOf(label, 0, 0.8, P, 3, 0.3), { tone: "lo", crease: "none" }));
  out.push(
    L(
      [5, 9, 13]
        .map((dy, index) => k.lineOnTop([label.x + 5, label.y + dy], [label.x + label.w - (index === 2 ? 16 : 5), label.y + dy], 0.8, P))
        .join(""),
      { tone: "faint", free: true },
    ),
  );
  out.push(D([at([label.x + 2.2, label.y + 2.2, 0.8]), at([label.x + label.w - 2.2, label.y + label.d - 2.2, 0.8])], { size: 0.4 }));
  return out.join("");
}

function channels() {
  const out = [];
  for (const line of CHANNELS) out.push(L(k.onTop(line, 0, P), { tone: "mid" }));
  out.push(L(k.onTop(ESCALATION, 0, P), { tone: "mid", dashed: true }));
  out.push(D(JUNCTIONS.map(([x, y]) => at([x, y, 0])), { size: 1.1, tone: "mid" }));
  return out.join("");
}

// A lamp is the station's top inset, drawn lit and hidden until the token arrives.
const lamp = (id, d) => `<g data-lamp="${id}" style="opacity:0">${L(d, { tone: "lit" })}</g>`;

function tray(plan, id, word) {
  const out = [];
  out.push(S(k.slabOf(plan, 0, TRAY_H, P, 4, 0.6), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(plan, 3), TRAY_H, P, 3), { tone: "faint" }));
  out.push(lamp(id, k.planOutline(k.insetPlan(plan, 3), TRAY_H, P, 3)));
  const [cx, cy] = centreOf(plan);
  out.push(T([cx, cy + 3], TRAY_H, word, 8, "mid"));
  out.push(D([at([plan.x + 2.4, plan.y + 2.4, TRAY_H]), at([plan.x + plan.w - 2.4, plan.y + plan.d - 2.4, TRAY_H])], { size: 0.4 }));
  return out.join("");
}

function station(plan, id, name, model) {
  const out = [`<path class="iso-halo" d="${k.haloOf(plan, 0, STATION_H, P)}" style="filter:blur(3px)"/>`];
  out.push(S(k.slabOf(plan, 0, STATION_H, P, 3, 0.6), { tone: "mid" }));
  const inset = k.planOutline(k.insetPlan(plan, 2.4), STATION_H, P, 3);
  out.push(L(inset, { tone: "faint" }), lamp(id, inset));
  const [cx, cy] = centreOf(plan);
  out.push(T([cx, cy - 1], STATION_H, name, 8, "hi"));
  out.push(T([cx, cy + 7], STATION_H, model, 4.6, "mid"));
  out.push(D(k.corners(plan, 4).map(([x, y]) => at([x, y, STATION_H])), { size: 0.4 }));
  return out.join("");
}

function hub() {
  const out = [`<path class="iso-halo" d="${k.haloOf({ x: HUB.x - 22, y: -22, w: 44, d: 44, r: 22 }, 0, HUB.h, P)}"/>`];
  out.push(S(k.cylinder(HUB.x, HUB.y, HUB.r + 4, 0, 2, P, 56, 0.4), { tone: "mid" }));
  out.push(D([0, 1, 2, 3].map((i) => {
    const a = Math.PI / 4 + (i * Math.PI) / 2;
    return at([HUB.x + Math.cos(a) * (HUB.r + 2.2), HUB.y + Math.sin(a) * (HUB.r + 2.2), 2]);
  }), { size: 0.4 }));
  out.push(S(k.cylinder(HUB.x, HUB.y, HUB.r, 2, HUB.h - 2, P, 64, 0.8), { tone: "hi", crease: "lo" }));
  out.push(L(k.knurl(HUB.x, HUB.y, HUB.r, HUB.h - 3, HUB.h, 72, P, 0.3), { tone: "lo" }));
  out.push(L(k.sideArc(HUB.x, HUB.y, HUB.r, HUB.h - 3, P, 40), { tone: "faint" }));
  out.push(L(k.ring(HUB.x, HUB.y, HUB.r - 2.4, HUB.h, P, 64), { tone: "lo" }));
  const ticks = k.radialTicks(HUB.x, HUB.y, HUB.r - 3, 40, 5, HUB.h, [1.2, 2.6], P);
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }));
  out.push(L(k.ring(HUB.x, HUB.y, 3.4, HUB.h, P, 20), { tone: "mid" }));
  out.push(lamp("hub", k.ring(HUB.x, HUB.y, HUB.r - 2.4, HUB.h, P, 64)));
  out.push(T([HUB.x, HUB.y + 11], HUB.h, "opus", 5, "mid"));
  return out.join("");
}

function token() {
  return [
    `<path class="iso-halo" d="${k.haloOf({ x: -6, y: -6, w: 12, d: 12, r: 6 }, 0, 0.1, P)}" style="filter:blur(2px)"/>`,
    S(k.cylinder(0, 0, 5, 0, 3.2, P, 28, 0.4), { tone: "hi", lit: true }),
    L(k.ring(0, 0, 2.6, 3.2, P, 20), { tone: "lo" }),
  ].join("");
}

const aimAt = (angle) => {
  const dx = Math.cos(angle), dy = Math.sin(angle);
  return lineOnTop([HUB.x - dx * 3.4, HUB.y - dy * 3.4], [HUB.x + dx * (HUB.r - 4), HUB.y + dy * (HUB.r - 4)], HUB.h + 0.2, P);
};
// The live page has `lineOnTop` from the inlined kit; the build uses k's.
const lineOnTop = (...args) => k.lineOnTop(...args);

// ---------- Scenarios: what the orchestrator decides for each request ----------
const z0 = 0;
const onHub = [HUB.x, HUB.y, HUB.h];
const onTop = (id) => [0, W[id].y, STATION_H];
const inbox = [[-140, 0, TRAY_H], [INBOX.x + INBOX.w, 0, z0], [HUB.x - HUB.r - 3, 0, z0]];
const toBus = [[HUB.x + HUB.r + 3, 0, z0], [BUS_IN, 0, z0]];
const into = (id) => [[BUS_IN, W[id].y, z0], [W[id].plan.x, W[id].y, z0]];
const outOf = (id) => [[W[id].plan.x + W[id].plan.w, W[id].y, z0], [BUS_OUT, W[id].y, z0], [BUS_OUT, 0, z0], [REVIEW.x, 0, z0]];
const review = [84, 0, STATION_H];
const done = [[REVIEW.x + REVIEW.w, 0, z0], [OUTBOX.x, 0, z0], [140, 0, TRAY_H]];
const stop = (p, lamp, say, more = {}) => ({ p, lamp, say, stop: 1300, ...more });

const viaWorker = (id, model, say) => [
  ...inbox,
  stop(onHub, "hub", `orchestrator routes it to ${id}`, { aim: 0 }),
  ...toBus, ...into(id),
  stop(onTop(id), id, `${id} · ${model} ${say}`),
  ...outOf(id),
  stop(review, "review", "reviewer · sonnet checks the diff"),
  ...done,
  stop([140, 0, TRAY_H], "out", "verified, reported back", { stop: 1500 }),
];

const SCENARIOS = [
  {
    request: "Fix a typo in one file",
    path: [
      ...inbox,
      stop(onHub, "hub", "small edit: orchestrator does it itself", { aim: -Math.PI / 2, stop: 1700 }),
      [HUB.x, HUB.y - HUB.r - 3, z0], [HUB.x, BYPASS_Y, z0], [140, BYPASS_Y, z0], [140, OUTBOX.y, z0],
      stop([140, 0, TRAY_H], "out", "done, no workers spent", { stop: 1500 }),
    ],
  },
  {
    request: "Where is auth handled?",
    path: [
      ...inbox,
      stop(onHub, "hub", "orchestrator needs facts first", { aim: 0 }),
      ...toBus, ...into("scout"),
      stop(onTop("scout"), "scout", "scout · haiku searches, read-only"),
      [W.scout.plan.x, W.scout.y, z0], [BUS_IN, W.scout.y, z0], [BUS_IN, 0, z0], [HUB.x + HUB.r + 3, 0, z0],
      stop(onHub, "hub", "facts back to the orchestrator; it plans", { aim: Math.PI, stop: 1700 }),
    ],
  },
  { request: "Rename a prop in 30 files", path: viaWorker("sonic", "haiku", "does the mechanical edit") },
  { request: "Restyle the blog page", path: viaWorker("frontend", "sonnet", "builds the UI") },
  { request: "Bump deps, run the build", path: viaWorker("task", "deepseek flash", "runs it") },
  {
    request: "A bug the cheap worker can't fix",
    path: [
      ...inbox,
      stop(onHub, "hub", "orchestrator routes it to task", { aim: 0 }),
      ...toBus, ...into("task"),
      stop(onTop("task"), "task", "task · deepseek flash, attempt 1 fails"),
      stop(onTop("task"), "task", "attempt 2 fails", { stop: 1000 }),
      [W.task.plan.x, 40, z0], [ESC_X, 40, z0], [ESC_X, 68, z0], [W["deep-task"].plan.x, 68, z0],
      stop(onTop("deep-task"), "deep-task", "escalated: deep-task · sonnet fixes it"),
      ...outOf("deep-task"),
      stop(review, "review", "reviewer · sonnet checks the diff"),
      ...done,
      stop([140, 0, TRAY_H], "out", "verified, reported back", { stop: 1500 }),
    ],
  },
];

// Normalise every path to waypoint objects.
const PLAYS = SCENARIOS.map((s) => ({
  request: s.request,
  points: s.path.map((w) => (Array.isArray(w) ? { p: w } : w)),
}));

// Hover targets: screen centres of the stations, and which request each starts.
const TARGETS = [
  { at: at([HUB.x, HUB.y, HUB.h]), play: 0 },
  { at: at([INBOX.x + 14, 0, TRAY_H]), play: 0 },
  ...WORKERS.map((w) => ({ at: at([0, w.y, STATION_H]), play: { scout: 1, sonic: 2, frontend: 3, task: 4, "deep-task": 5 }[w.id] })),
];

const START = PLAYS[3];
const startStop = START.points.findIndex((w) => w.lamp === "frontend");

const svg = k.figureSvg({
  width: WIDTH,
  height: HEIGHT,
  label:
    "A routing board. A request token comes in from the inbox onto the orchestrator's turntable, which points it either down a bypass to the outbox (small edits it does itself) or along channels to one of five worker stations: scout, sonic, frontend, task and deep-task. Worker output runs through the reviewer to the outbox. Scout's facts return to the orchestrator, and a task that fails twice escalates along a dashed channel to deep-task.",
  body: [
    plate(),
    channels(),
    `<path data-part="trail" class="iso-line" data-tone="lit" d="" style="stroke-width:1.4;opacity:.55"/>`,
    tray(INBOX, "in", "in"),
    tray(OUTBOX, "out", "out"),
    ...byDepth(WORKERS.map((w) => [w.plan.x, w.y, w])).map(([, , w]) => station(w.plan, w.id, w.id, w.model)),
    station(REVIEW, "review", "review", "sonnet"),
    hub(),
    `<path data-part="aim" class="iso-line" data-tone="lit" data-free="start" d="${aimAt(0)}" style="stroke-width:1.2"/>`,
    `<g data-part="token" transform="${k.translateAlong(P, START.points[startStop].p)}">${token()}</g>`,
  ],
});

const live = `
if (matchMedia("(prefers-color-scheme: light)").matches) document.body.dataset.theme = "light";
const P = ${JSON.stringify(P)};
const HUB = ${JSON.stringify(HUB)};
const PLAYS = ${JSON.stringify(PLAYS)};
const TARGETS = ${JSON.stringify(TARGETS)};
const SPEED = 120;
const stage = document.querySelector(".iso-stage");
const svg = stage.querySelector("svg");
const trailEl = svg.querySelector('[data-part="trail"]');
const tokenEl = svg.querySelector('[data-part="token"]');
const aimEl = svg.querySelector('[data-part="aim"]');
const lamps = Object.fromEntries([...svg.querySelectorAll("[data-lamp]")].map((el) => [el.dataset.lamp, el]));
const readout = document.querySelector("[data-readout]");
const titleEl = document.querySelector('[data-corner="title"]');
const still = matchMedia("(prefers-reduced-motion: reduce)");
const aimAt = ${aimAt.toString()};
const easeIO = (u) => u * u * (3 - 2 * u);
const span3 = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);

// Split a play into runs: a polyline that ends on a stop.
function legsOf(play) {
  const runs = [];
  let line = [play.points[0].p];
  for (const w of play.points.slice(1)) {
    line.push(w.p);
    if (w.stop) { runs.push({ line, stop: w }); line = [w.p]; }
  }
  return runs.map((run) => {
    const lengths = run.line.slice(1).map((p, i) => span3(run.line[i], p));
    return { ...run, lengths, total: lengths.reduce((a, b) => a + b, 0) };
  });
}
function pointAt(run, s) {
  let left = s;
  for (let i = 0; i < run.lengths.length; i++) {
    if (left <= run.lengths[i] || i === run.lengths.length - 1) {
      const u = run.lengths[i] ? Math.min(1, left / run.lengths[i]) : 1;
      const a = run.line[i], b = run.line[i + 1];
      return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
    }
    left -= run.lengths[i];
  }
  return run.line[run.line.length - 1];
}

let play = 3, runs = legsOf(PLAYS[play]), run = 0, clock = 0, phase = "dwell";
let angle = 0, aimTarget = 0, lit = null, touring = true, visible = false, frame = 0, last = 0, idleTimer = 0;
run = runs.findIndex((r) => r.stop.lamp === "frontend");

function light(id) {
  if (lit === id) return;
  for (const [key, el] of Object.entries(lamps)) el.style.opacity = key === id ? "1" : "0";
  lit = id;
}
function say(text) {
  const full = text;
  const ask = (play + 1) + "/6 · " + PLAYS[play].request;
  if (titleEl && titleEl.textContent !== ask) titleEl.textContent = ask;
  if (readout.textContent !== full) readout.textContent = full;
  stage.setAttribute("aria-valuenow", String(play + 1));
  stage.setAttribute("aria-valuetext", full);
}
function place(p) { tokenEl.setAttribute("transform", translateAlong(P, p)); }
function arrive(stop) {
  light(stop.lamp);
  say(stop.say);
  if (typeof stop.aim === "number") aimTarget = stop.aim;
}
function start(index) {
  play = index;
  runs = legsOf(PLAYS[play]);
  run = 0; clock = 0; phase = "move";
  light(null);
  aimTarget = Math.PI;
  say("enters the inbox");
  drawTrail();
  if (still.matches) { const end = runs[runs.length - 1]; for (const r of runs) if (typeof r.stop.aim === "number") aimTarget = r.stop.aim; angle = aimTarget; place(end.stop.p); arrive(end.stop); drawAim(); }
  kick();
}
function drawTrail() {
  const pts = PLAYS[play].points.filter((w) => w.p[2] === 0).map((w) => [w.p[0], w.p[1]]);
  trailEl.setAttribute("d", onTop(pts, 0.3, P));
}
function drawAim() { aimEl.setAttribute("d", aimAt(angle)); }
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  if (!still.matches) {
    const current = runs[run];
    clock += dt;
    if (phase === "move") {
      const duration = current.total / SPEED + 0.35;
      const u = Math.min(1, clock / duration);
      place(pointAt(current, current.total * easeIO(u)));
      if (u >= 1) { phase = "dwell"; clock = 0; arrive(current.stop); }
    } else if (clock * 1000 >= current.stop.stop) {
      clock = 0;
      if (run < runs.length - 1) { run += 1; phase = "move"; }
      else if (touring) { start((play + 1) % PLAYS.length); }
      else { phase = "done"; }
    }
    let delta = aimTarget - angle;
    delta = Math.atan2(Math.sin(delta), Math.cos(delta));
    angle += delta * (1 - Math.exp(-dt / 0.18));
    if (Math.abs(delta) < 0.001) angle = aimTarget;
    drawAim();
  }
  const busy = !still.matches && (phase !== "done" || angle !== aimTarget);
  frame = visible && busy ? requestAnimationFrame(tick) : 0;
}
function kick() { if (!frame && visible) { last = 0; frame = requestAnimationFrame(tick); } }
function choose(index) {
  touring = false;
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => { touring = !still.matches; if (phase === "done") start((play + 1) % PLAYS.length); }, 8000);
  if (index !== play || phase === "done") start(index);
}
new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; if (visible) kick(); }, { rootMargin: "120px 0px" }).observe(stage);
if (still.matches) { touring = false; }
stage.addEventListener("pointermove", (event) => {
  const box = svg.getBoundingClientRect();
  const view = svg.viewBox.baseVal;
  const x = ((event.clientX - box.left) / box.width) * view.width;
  const y = ((event.clientY - box.top) / box.height) * view.height;
  let best = null, bestD = 34;
  for (const t of TARGETS) { const d = Math.hypot(t.at[0] - x, t.at[1] - y); if (d < bestD) { best = t; bestD = d; } }
  if (best) choose(best.play);
});
stage.addEventListener("keydown", (event) => {
  const n = Number(event.key);
  let to = null;
  if (n >= 1 && n <= PLAYS.length) to = n - 1;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") to = (play + 1) % PLAYS.length;
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") to = (play + PLAYS.length - 1) % PLAYS.length;
  if (to === null) return;
  event.preventDefault();
  choose(to);
});
// Tell the host page how tall the card is, so the iframe fits it exactly.
const page = document.querySelector(".iso-page");
const report = () => parent.postMessage({ type: "figure-height", id: "agent-flow", height: page.getBoundingClientRect().height }, "*");
new ResizeObserver(report).observe(page);
addEventListener("message", (event) => { if (event.data?.type === "figure-ping") report(); });
report();
light("frontend");
say("frontend · sonnet builds the UI");
angle = aimTarget = 0;
drawAim();
drawTrail();
`;

const body = k.plateHtml({
  fig: "Fig 1",
  title: "4/6 · Restyle the blog page",
  hint: "Hover a station, or press 1 to 6",
  readout: "frontend · sonnet builds the UI",
  keys: [
    { mark: "lit", label: "The request token, the turntable's pointer and the station working on it" },
    { mark: "dashed", label: "Escalation: a task that fails twice goes to deep-task" },
  ],
  caption:
    "Every request lands on the orchestrator's turntable first. It decides: a small edit takes the bypass and the orchestrator does it itself; anything else runs down a channel to one worker, then through the reviewer to the outbox. Scout only fetches facts, so its token goes back to the orchestrator.",
  body: `<div class="iso-stage" tabindex="0" role="slider" aria-label="Routing board: number keys pick a request and show where the orchestrator sends it" aria-valuemin="1" aria-valuemax="${PLAYS.length}" aria-valuenow="4">${svg}</div>`,
});

// Sit flush inside the post: site background, no page margins.
const html = k
  .pageHtml({ title: "Routing board", theme: "dark", body, script: kitScript() + live })
  .replace(
    "</style>",
    `html,body{background:transparent}.iso-plate{padding:44px 8px}@media (max-width:560px){.iso-plate{padding:44px 4px 66px}}.iso-legend{font-size:14px}.iso-page{width:100%;margin:0;display:flow-root;padding-bottom:4px}.iso{--anatomy-page:#0a0a0a}.iso[data-theme="light"]{--anatomy-page:#f7f7f4}[data-lamp]{transition:opacity .35s ease}</style>`,
  );

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
console.log("wrote", OUT);
