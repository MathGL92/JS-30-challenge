const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// will populate items array with items sotred in lcoal storage or return a blank array if no items in local storage
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
  event.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
      <li>
        <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : '' } />
        <label for="item${index}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

// persist the checked list when page is refreshed
function toggleDone(event) {
  if (!event.target.matches('input')) return; // skip unless it is an input
  const index = event.target.dataset.index;
  // if done was true, it is going to give false and if false, it will give true
  items[index].done = !items[index].done;
  // sotre it in local storage
  localStorage.setItem('items', JSON.stringify(items));
  // visually update it on our page
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);


// when you refresh the page, populate our itemsList with items saved in local storage
populateList(items, itemsList);

itemsList.addEventListener('click', toggleDone);
