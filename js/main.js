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
