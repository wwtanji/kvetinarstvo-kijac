const ART_SELECTOR = '.vase';
const HERO_SELECTOR = '.hero';
const REPLAY_SELECTOR = '[data-replay]';
const GROWING_CLASS = 'is-growing';
const LEAN_VARIABLE = '--lean';
const MAX_LEAN_DEGREES = 4;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const art = document.querySelector(ART_SELECTOR);
const hero = document.querySelector(HERO_SELECTOR);
const replayButton = document.querySelector(REPLAY_SELECTOR);
const reduceMotion = matchMedia(REDUCED_MOTION_QUERY).matches;

function grow() {
  art.classList.remove(GROWING_CLASS);
  art.getBoundingClientRect();
  art.classList.add(GROWING_CLASS);
}

if (!reduceMotion) {
  grow();
  hero.addEventListener('pointermove', (event) => {
    const share = event.clientX / innerWidth - 0.5;
    art.style.setProperty(LEAN_VARIABLE, `${(share * 2 * MAX_LEAN_DEGREES).toFixed(2)}deg`);
  });
}

replayButton.addEventListener('click', grow);
