function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
}
// New function to handle touch events
function playSoundOnTouch(e) {
  // Find the element with a data-key attribute that was touched
  const key = e.target.closest('div[data-key]');
  if (!key) return;

  const keyCode = key.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
}

window.addEventListener('keydown', playSound);
// Add event listener for touch events
window.addEventListener('touchstart', playSoundOnTouch);
``;
