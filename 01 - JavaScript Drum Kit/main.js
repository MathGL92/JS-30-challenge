const playSound = event => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

const removeTransition = event => {
  if (event.propertyName !== 'transform') return;
  event.currentTarget.classList.remove('playing');
};

// remove transition CSS when transition ends
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// trigger event when click done
window.addEventListener('keydown', playSound);
