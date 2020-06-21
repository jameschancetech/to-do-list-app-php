import './index.css';

const addToList = document.querySelector(`.addToList`);
const noteContents = document.querySelector(`#note`);
const noteArea = document.querySelector(`.notes-area`);

function runDeleteButton() {
  const deleteButton = document.querySelectorAll(`.delete`);
  deleteButton.forEach(delbut => {
    delbut.addEventListener(`click`, e => {
      delbut.parentElement.remove();
    });
  });
}

function addToContainer(e) {
  const myNoteHTML = `
    <div class="note-container">
      <button class="delete"></button>
      <h4>${noteContents.value}</h4>
      <button class="favourite"></button>
    </div>
  `;
  noteArea.innerHTML += myNoteHTML;
  noteContents.value = ``;
  runDeleteButton();
}

function checkContents() {
  if (noteContents.value === ``) {
    return;
  }
  addToContainer();
}

addToList.addEventListener(`click`, checkContents);

document.addEventListener(`keydown`, e => {
  if (e.key === `Enter`) {
    checkContents();
  }
});
