import './node_modules/papercss/dist/paper.min.css';
import './index.css';

const addToList = document.querySelector(`.addToList`);
const noteContents = document.querySelector(`#note`);
const noteArea = document.querySelector(`.notes-area`);

function runDoneButton() {
  const doneButton = document.querySelectorAll(`.done`);
  doneButton.forEach(doneBut => {
    doneBut.addEventListener(`click`, e => {
      doneBut.parentElement.parentElement.remove();
    });
  });
}

function addToContainer(e) {
  const myNoteHTML = `
    <div class="card note-container">
      <div class="card-body">
        <p class="card-text">
          ${noteContents.value}
        </p>
        <button class="done btn-danger">Done</button>
      </div>
    </div>
  `;
  noteArea.innerHTML += myNoteHTML;
  noteContents.value = ``;
  runDoneButton();
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
