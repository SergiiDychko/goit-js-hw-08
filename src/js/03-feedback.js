var throttle = require('lodash.throttle');

const formInput = document.querySelector('.feedback-form');
const formInputData = {};
const LS_KEY = 'feedback-form-state';

function updateForm() {
  if (localStorage.getItem(LS_KEY) !== null) {
    const data = JSON.parse(localStorage.getItem(LS_KEY));
    Object.keys(data).forEach(key => {
      formInput.elements[key].value = data[key] || '';
      formInputData[key] = data[key] || '';
    });
  }
}
updateForm();

function addToStorage(event) {
  formInputData[event.target.name] = event.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formInputData));
}

formInput.addEventListener('input', throttle(addToStorage, [(wait = 500)]));

const submitBtnRef = document.querySelector('[type="submit"]');
function submitForm(event) {
  event.preventDefault();
  const data = JSON.parse(localStorage.getItem(LS_KEY));
  console.log(data);
  Object.keys(data).forEach(key => {
    formInput.elements[key].value = '';
  });
  localStorage.removeItem(LS_KEY);
}

submitBtnRef.addEventListener('click', submitForm);
