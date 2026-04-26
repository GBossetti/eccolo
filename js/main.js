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

// Pillar hover — last hovered stays active, first is active by default
const pillars = document.querySelectorAll('.svc-pillar');
if (pillars.length) pillars[0].classList.add('is-active');

const isMobile = () => window.matchMedia('(max-width: 620px)').matches;

// Mobile: move each process section inline after its card
if (isMobile()) {
  pillars.forEach(pillar => {
    const sec = document.getElementById(pillar.dataset.process);
    if (!sec) return;
    pillar.after(sec);
    sec.classList.remove('is-hidden');
  });
}

pillars.forEach(pillar => {
  pillar.addEventListener('mouseenter', () => {
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
