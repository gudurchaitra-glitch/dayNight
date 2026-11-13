const sky = document.querySelector("#sky-fill");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const stars = document.querySelector("#stars");
const clouds = document.querySelector("#clouds");
const dayWindows = document.querySelector("#building-windows");
const nightWindows = document.querySelector("#night-windows");
const billboards = document.querySelector("#billboards");
const neon = document.querySelector("#neon-reflections");
const nightOverlay = document.querySelector("#night-overlay");
const trails = document.querySelector("#vehicle-trails");
const haze = document.querySelector("#city-haze");
const scrubber = document.querySelector("#timeScrubber");
const label = document.querySelector("#timeLabel");
const toggle = document.querySelector("#playPause");

let progress = 0;
let playing = true;
let last = 0;
const duration = 26000;

const stops = [
  [0,   [65,186,255], [180,235,255]],
  [0.5, [255,137,132], [255,194,150]],
  [1,   [7,10,38],     [21,26,70]]
];
const mix = (a,b,t) => a.map((v,i) => Math.round(v+(b[i]-v)*t));
const rgb = c => `rgb(${c.join(",")})`;

function setScene(p) {
  p = Math.max(0, Math.min(1, p));
  let a, b, t;
  if (p < .5) { a=stops[0]; b=stops[1]; t=p*2; }
  else { a=stops[1]; b=stops[2]; t=(p-.5)*2; }
  const top = mix(a[1], b[1], t);
  const bottom = mix(a[2], b[2], t);
  sky.setAttribute("fill", `url(#sky)`);
  document.querySelector("#sky stop:first-child").setAttribute("stop-color", rgb(top));
  document.querySelector("#sky stop:last-child").setAttribute("stop-color", rgb(bottom));

  const night = Math.max(0, Math.min(1, (p-.52)/.34));
  const sunset = Math.max(0, 1-Math.abs(p-.5)/.25);
  sun.style.opacity = String(1 - Math.min(1, p*2.1));
  moon.style.opacity = String(night);
  stars.style.opacity = String(night);
  clouds.style.opacity = String(1 - night*.65);
  dayWindows.style.opacity = String(.8*(1-night));
  nightWindows.style.opacity = String(night);
  billboards.style.filter = `saturate(${1+night*.9}) brightness(${1+night*.35})`;
  neon.style.opacity = String(night);
  nightOverlay.style.opacity = String(night*.23);
  trails.style.opacity = String(night*.8);
  haze.style.opacity = String(.12 + sunset*.12 + night*.08);
  document.querySelector("#city-haze").setAttribute("fill", night ? "#6b62ff" : "#d4f2ff");

  label.value = p < .32 ? "Day" : p < .67 ? "Sunset" : "Night";
  scrubber.value = Math.round(p*100);
}
function tick(now) {
  if (!last) last = now;
  const dt = now-last; last = now;
  if (playing) {
    progress = (progress + dt/duration) % 1;
    setScene(progress);
  }
  requestAnimationFrame(tick);
}
scrubber.addEventListener("input", e => {
  progress = Number(e.target.value)/100;
  setScene(progress);
});
toggle.addEventListener("click", () => {
  playing = !playing;
  toggle.textContent = playing ? "Pause animation" : "Play animation";
  last = 0;
});
setScene(progress);
requestAnimationFrame(tick);
