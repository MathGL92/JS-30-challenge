// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const screenSizeButton = player.querySelector('.size-video');

// write out our functions
function togglePlay() {
  video.paused ? video.play() : video.pause();
};

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
};

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
  video[this.name] = this.value;
};

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

function scrub(event) {
  const scrubTime = event.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
};

function changeSizeScreen() {
  if (!player.classList.contains('fullscreen')) {
    player.classList.add('fullscreen');
    screenSizeButton.innerHTML = '<i class="fa fa-compress"></i>';
  } else {
    player.classList.remove('fullscreen');
    screenSizeButton.innerHTML = '<i class="fa fa-expand"></i>';
  }
}

// add events listener

// when video or player clicked, togglePlay
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

// skip video
skipButtons.forEach(button => button.addEventListener('click', skip));

// update range volume and speed of video
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// update bar progress of video
video.addEventListener('timeupdate', handleProgress);

// when clicking on progress bar, change the time of video
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
screenSizeButton.addEventListener('click', changeSizeScreen);
