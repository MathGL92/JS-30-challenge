const canvas = document.querySelector('#draw');
// with canvas we need a context that can be 2d or 3d for instance -> where we do our drawing for canvas
// fixed color
// ctx.strokeStyle = '#BAD';
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// options for canvas, we can check on MDN for different options
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// fixed width of line
ctx.lineWidth = 50;
// add the colors together when one on each other but we can change by other options to soustract for instance
// ctx.globalCompositeOperation = 'multiply';


// create a variable isDrawing because we want to draw only when we are clicking our mouse.
let isDrawing = false;
// to draw a line you need a starting X and Y and an ending X and Y
let lastX = 0;
let lastY = 0;

let hue = 0;
let direction = true;

// draw function when mouse moving
function draw(event) {
  if(!isDrawing) return; // stop the function from running when the mouse is not clicked
  console.log(event);
  // set the color of the draw
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // start a path with the next 3 following lines
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(event.offsetX, event.offsetY); // offset comes from the event
  ctx.stroke();
  // update lastX and lastY not to start always for the start point
  [lastX, lastY] = [event.offsetX, event.offsetY];
  // increment hue to change the color
  hue++;
  // max of hue is 360 so reset it
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// when mouse clicked, start drawing
// before we do a mousemove, we want to set isDrawing to true and update lastX and lastY, so we can drw different lines and start form where we want
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

// when the mouse moves, it triggers the draw function
canvas.addEventListener('mousemove', draw);

// when mouse not clicked, stop drawing
canvas.addEventListener('mouseup', () => isDrawing = false);
// when mouse leaves the canvas, stop drawing
canvas.addEventListener('mouseout', () => isDrawing = false);
