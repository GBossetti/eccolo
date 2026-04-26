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

  splash.addEventListener('transitionend', function () {
    splash.style.display = 'none';
    home.style.position  = 'relative';
    home.style.transform = 'none';
    home.style.height    = 'auto';
    home.style.inset     = 'auto';
    document.body.style.overflow            = 'auto';
    document.body.style.height              = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height   = 'auto';
  }, { once: true });
}

// Pillar interaction — hover on desktop, tap on mobile
const pillars = document.querySelectorAll('.svc-pillar');
if (pillars.length) pillars[0].classList.add('is-active');

const isMobile = () => window.matchMedia('(max-width: 620px)').matches;

function setupMobileLayout() {
  if (!isMobile()) return;

  pillars.forEach(pillar => {
    const sec = document.getElementById(pillar.dataset.process);
    if (!sec) return;
    pillar.after(sec);
    sec.classList.remove('is-hidden');
    sec.classList.add('is-mobile-inline');
  });
}

function activatePillar(pillar) {
  if (pillar.classList.contains('is-active')) return;
  pillars.forEach(p => p.classList.remove('is-active'));
  pillar.classList.add('is-active');

  if (!isMobile()) {
    const targetId = pillar.dataset.process;
    document.querySelectorAll('.process-section').forEach(sec => {
      if (sec.id === targetId) {
        sec.classList.remove('is-hidden');
        sec.classList.add('is-entering');
        setTimeout(() => sec.classList.remove('is-entering'), 350);
      } else {
        sec.classList.add('is-hidden');
      }
    });
  }
}

setupMobileLayout();

pillars.forEach(pillar => {
  // Desktop: hover
  pillar.addEventListener('mouseenter', () => {
    if (!isMobile()) activatePillar(pillar);
  });

  // Mobile: tap → activate + scroll to its process section
  pillar.addEventListener('click', () => {
    if (!isMobile()) return;
    activatePillar(pillar);
    const sec = document.getElementById(pillar.dataset.process);
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Click the >> button
btn.addEventListener('click', enterHome);

// Scroll down on splash
splash.addEventListener('wheel', function (e) {
  if (e.deltaY > 0) enterHome();
});

// Swipe up on mobile (= scroll down)
let touchStartY = 0;
splash.addEventListener('touchstart', function (e) {
  touchStartY = e.touches[0].clientY;
});
splash.addEventListener('touchend', function (e) {
  if (touchStartY - e.changedTouches[0].clientY > 40) enterHome();
});
