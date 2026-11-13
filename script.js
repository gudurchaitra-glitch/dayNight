const animation = document.getElementById('sceneAnimation');
const toggle = document.getElementById('toggle');
const restart = document.getElementById('restart');
let paused = false;
let savedFrame = null;

// Browsers do not expose GIF frame seeking, so pause freezes the current visual
// by copying it to a canvas. Restart reloads the original animated GIF.
toggle.addEventListener('click', () => {
  if (!paused) {
    const canvas = document.createElement('canvas');
    canvas.width = animation.naturalWidth;
    canvas.height = animation.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(animation, 0, 0);
    savedFrame = canvas.toDataURL('image/png');
    animation.src = savedFrame;
    toggle.textContent = '▶';
    toggle.title = 'Play';
    toggle.setAttribute('aria-label', 'Play animation');
    paused = true;
  } else {
    restartAnimation();
  }
});
function restartAnimation() {
  paused = false;
  animation.src = `assets/day-to-night.gif?restart=${Date.now()}`;
  toggle.textContent = 'Ⅱ';
  toggle.title = 'Pause';
  toggle.setAttribute('aria-label', 'Pause animation');
}
restart.addEventListener('click', restartAnimation);
