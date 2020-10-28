const divs = document.querySelectorAll('div');
  const button = document.querySelector('button');

  function logText(event) {
    console.log(this.classList.value);
    // event.stopPropagation(); // stop bubbling! so you capture only the div you click on (not the parents)
    // console.log(this);
  }

  divs.forEach(div => div.addEventListener('click', logText, {
    // by default if you click on a div nested in an other one, it will trigger the one you clicked and then the parent, if you change "capture: true," you then trigger first the parent and then the child
    capture: false,
    // once:true will unbind itself once clicked, it means the event can be clicked only once
    once: true
  }));

  button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  });
