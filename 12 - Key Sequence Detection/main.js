const pressed = [];
const secretCode = "hello";

window.addEventListener('keyup', event => {
  console.log(event.key);
  pressed.push(event.key);
  console.log(pressed);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
})
