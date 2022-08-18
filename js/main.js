const addBtn = document.querySelector('.add-note');
const removeBtn = document.querySelector('.remove-all-note');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const removeNote = document.querySelector('.fa-xmark');
const panel = document.querySelector('.panel');
const select = document.querySelector('#category');
const textarea = document.querySelector('#text');
const panelError = document.querySelector('.error');
const noteArea = document.querySelector('.note-area');
const deleteAlert = document.querySelector('.delete-alert');
const noBtn = document.querySelector('.no-button');
const yesBtn = document.querySelector('.yes-button');

let selectedValue;
let cardID = 0;

const showPanel = () => {
	panel.classList.add('panel-animation-open');
	panel.classList.remove('panel-animation-close');
	panel.style.visibility = 'visible';
};
const hidePanel = () => {
	panel.classList.remove('panel-animation-open');
	panel.classList.add('panel-animation-close');
	setTimeout(() => {
		panel.style.visibility = 'hidden';
	}, 300);
};

const checkNote = () => {
	console.log(textarea.value);
	if (select.selectedIndex === 0) {
		panelError.textContent = 'Wybierz kategorię';
	} else if (textarea.value === '') {
		panelError.textContent = 'Wpisz treść notatki';
	} else {
		panelError.textContent = '';
		createNote();
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('task-box');
	newNote.setAttribute('id', cardID);
	newNote.innerHTML = `
    <p class="tittle"> ${selectedValue}<i class="fa-solid fa-xmark"onclick ="deleteNote(${cardID})"></i></p>
    <p class="contents">
    ${textarea.value}
    </p>`;
	noteArea.appendChild(newNote);
	cardID++;
	textarea.value = '';
	select.selectedIndex = 0;
	hidePanel();
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = select.options[select.selectedIndex].text;
};

const checkColor = (note) => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const showAlert = () => {
	if (noteArea.innerHTML === '') {
	} else {
		deleteAlert.classList.add('panel-animation-open');
		deleteAlert.classList.remove('panel-animation-close');
		deleteAlert.style.visibility = 'visible';
	}
};
const hideAlert = () => {
	deleteAlert.classList.remove('panel-animation-open');
	deleteAlert.classList.add('panel-animation-close');
	setTimeout(() => {
		deleteAlert.style.visibility = 'hidden';
	}, 300);
};
const deleteAllNote = () => {
	hideAlert();
	noteArea.innerHTML = '';
	cardID = 0;
};
addBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', hidePanel);
saveBtn.addEventListener('click', checkNote);
removeBtn.addEventListener('click', showAlert);
noBtn.addEventListener('click', hideAlert);
yesBtn.addEventListener('click', deleteAllNote);
