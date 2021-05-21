const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('.list');

button.addEventListener("click", () => {
  let book = input.value;
  input.value = '';

  if (book == "") {
    book = 'Invalid Value';
  }
  let listItem = document.createElement('li');
  let listText = document.createElement('p');
  let deleteButton = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = book;
  listItem.appendChild(deleteButton);
  deleteButton.textContent = '❌';
  list.appendChild(listItem);

  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});


