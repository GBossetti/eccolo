const splash = document.getElementById('splash');
const home   = document.getElementById('home');
const btn    = document.getElementById('enter-btn');

let entered = false;

function enterHome() {
  if (entered) return;
  entered = true;

  btn.style.pointerEvents = 'none';
  splash.classList.add('exiting');
  home.classList.add('entering');
  home.removeAttribute('aria-hidden');

  splash.addEventListener('transitionend', function () {
    splash.style.display     = 'none';
    splash.style.willChange  = 'auto';
    home.style.position      = 'relative';
    home.style.transform     = 'none';
    home.style.willChange    = 'auto';
    home.style.height        = 'auto';
    home.style.inset         = 'auto';
    document.body.style.overflow            = 'auto';
    document.body.style.height              = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height   = 'auto';
  }, { once: true });
}

const isMobile = () => window.matchMedia('(max-width: 620px)').matches;

// Mobile: process steps snap one at a time
if (isMobile()) {
  document.querySelectorAll('.process-steps').forEach(track => {
    const steps = Array.from(track.querySelectorAll('.process-step'));
    let currentIndex = 0;
    let startX = 0, startY = 0;

    function goTo(index) {
      currentIndex = Math.max(0, Math.min(steps.length - 1, index));
      const trackLeft = track.getBoundingClientRect().left;
      const stepLeft  = steps[currentIndex].getBoundingClientRect().left;
      track.scrollTo({ left: stepLeft - trackLeft + track.scrollLeft, behavior: 'smooth' });
    }

    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    track.addEventListener('touchmove', e => {
      const dx = Math.abs(e.touches[0].clientX - startX);
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dx > dy && dx > 5) e.preventDefault();
    }, { passive: false });

    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
        goTo(currentIndex + (dx < 0 ? 1 : -1));
      }
    }, { passive: true });
  });
}

// ─── SERVICE PILLAR ACCORDION ─────────────────────────────────────────────
(function () {
  const pillars   = Array.from(document.querySelectorAll('.svc-pillar'));
  const isDesktop = () => window.matchMedia('(min-width: 900px)').matches;

  function setPillarState(pillar, open) {
    pillar.classList.toggle('is-open', open);
    const btn   = pillar.querySelector('.svc-expand-btn');
    const body  = pillar.querySelector('.svc-pillar-body');
    const title = pillar.querySelector('.svc-pillar-title');
    if (btn) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (title) btn.setAttribute('aria-label', (open ? 'Collapse ' : 'Expand ') + title.textContent);
    }
    if (body) body.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function initPillars() {
    const open = isDesktop();
    pillars.forEach(p => setPillarState(p, open));
  }

  function togglePillar(target) {
    if (isDesktop()) return;
    const willOpen = !target.classList.contains('is-open');
    pillars.forEach(p => setPillarState(p, false));
    if (willOpen) setPillarState(target, true);
  }

  pillars.forEach(pillar => {
    pillar.addEventListener('click', e => {
      if (e.target.closest('.svc-cta')) return;
      togglePillar(pillar);
    });
    pillar.addEventListener('keydown', e => {
      if (e.target.closest('.svc-cta')) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePillar(pillar); }
    });
  });

  initPillars();
  window.matchMedia('(min-width: 900px)').addEventListener('change', initPillars);
})();

btn.addEventListener('click', enterHome);

splash.addEventListener('wheel', function (e) {
  if (e.deltaY > 0) enterHome();
});

let touchStartY = 0;
splash.addEventListener('touchstart', function (e) {
  touchStartY = e.touches[0].clientY;
});
splash.addEventListener('touchend', function (e) {
  if (touchStartY - e.changedTouches[0].clientY > 40) enterHome();
});
