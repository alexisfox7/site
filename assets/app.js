(function () {
  const box = document.getElementById('box');
  const upBtn = document.getElementById('upBtn');
  const downBtn = document.getElementById('downBtn');

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const STAGE_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--stage-h'));
  const STEP = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--step'));
  const BOX_H = 50;

  let y = 0;
  // Randomly invert controls 50/50 chance
  const isInverted = Math.random() < 0.5;

  function render() {
    box.style.top = y + 'px';
  }

  function move(dirLabel) {
    // logical direction: 'up' means y -= STEP, 'down' means y += STEP
    const logicalDelta = dirLabel === 'up' ? -STEP : STEP;
    // Apply inversion randomly
    const appliedDelta = isInverted ? -logicalDelta : logicalDelta;

    y = clamp(y + appliedDelta, 0, STAGE_H - BOX_H);
    render();
  }

  upBtn.addEventListener('click', () => move('up'));
  downBtn.addEventListener('click', () => move('down'));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') { e.preventDefault(); move('up'); }
    if (e.key === 'ArrowDown') { e.preventDefault(); move('down'); }
  });

  render();
})();