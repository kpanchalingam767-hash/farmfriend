// Smart Crop Advisory System - index page logic (plain JavaScript, no dependencies)
(function () {
  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const viewer = document.getElementById('viewer');
  const vTitle = document.getElementById('v-title');
  const vList = document.getElementById('v-list');
  const vCount = document.getElementById('v-count');
  let current = 0;

  function renderGrid(filter) {
    const q = (filter || '').trim().toLowerCase();
    grid.textContent = '';
    SLIDES.forEach((s, i) => {
      if (q && !s.join(' ').toLowerCase().includes(q)) return;
      const d = document.createElement('div');
      d.className = 'card';
      d.addEventListener('click', () => openSlide(i));
      const h = document.createElement('h2');
      const n = document.createElement('span');
      n.className = 'n'; n.textContent = i + 1;
      h.append(n, s[0]); d.append(h);
      const u = document.createElement('ul');
      s.slice(1).forEach(t => { const l = document.createElement('li'); l.textContent = t; u.append(l); });
      d.append(u); grid.append(d);
    });
  }

  function showSlide(i) {
    current = (i + SLIDES.length) % SLIDES.length;
    const s = SLIDES[current];
    vTitle.textContent = s[0];
    vList.textContent = '';
    s.slice(1).forEach(t => { const l = document.createElement('li'); l.textContent = t; vList.append(l); });
    vCount.textContent = (current + 1) + ' / ' + SLIDES.length;
  }
  function openSlide(i) { viewer.classList.add('open'); showSlide(i); }
  function closeViewer() { viewer.classList.remove('open'); }

  document.getElementById('present').addEventListener('click', () => openSlide(0));
  document.getElementById('prev').addEventListener('click', () => showSlide(current - 1));
  document.getElementById('next').addEventListener('click', () => showSlide(current + 1));
  document.getElementById('close').addEventListener('click', closeViewer);
  search.addEventListener('input', e => renderGrid(e.target.value));
  document.addEventListener('keydown', e => {
    if (!viewer.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') showSlide(current + 1);
    else if (e.key === 'ArrowLeft') showSlide(current - 1);
    else if (e.key === 'Escape') closeViewer();
  });

  renderGrid();
})();
