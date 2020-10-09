const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleCheck(event) {
  // check if they had the shift key down
  // and check they are checking it
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    // then we can go ahead and do
    // loop over every checkbox
    checkboxes.forEach(checkbox => {
      // console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        // console.log("Starting to check them in between!")
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
