import './node_modules/papercss/dist/paper.min.css';
import './index.css';

const addToList = document.querySelector(`.addToList`);
const noteContents = document.querySelector(`#note`);
const noteArea = document.querySelector(`.notes-area`);
const completedNoteArea = document.querySelector(`#content2`);

function moveTheCard(e) {
  e.srcElement.parentElement.parentElement.classList.add(`completed`);
  e.currentTarget.remove();
  const completedNote = document.querySelector(`.completed`);
  completedNoteArea.appendChild(completedNote);
}

function runDoneButton() {
  const doneButton = document.querySelectorAll(`.done`);
  doneButton.forEach(doneBut => {
    doneBut.addEventListener(`click`, moveTheCard);
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
