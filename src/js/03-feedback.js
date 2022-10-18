import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');
const formInputData = {};
const localStrgKey = 'feedback-form-state';

function updateForm() {
  if (localStorage.getItem(localStrgKey) !== null) {
    const data = JSON.parse(localStorage.getItem(localStrgKey));
    Object.keys(data).forEach(key => {
      formInput.elements[key].value = data[key] || '';
      formInputData[key] = data[key] || '';
    });
  }
}
updateForm();

function addToStorage(event) {
  formInputData[event.target.name] = event.target.value;
  localStorage.setItem(localStrgKey, JSON.stringify(formInputData));
};

formInput.addEventListener('input', throttle(addToStorage, 500));

const submitBtnRef = document.querySelector('[type="submit"]');
function submitForm(event) {
  event.preventDefault();
  const data = JSON.parse(localStorage.getItem(localStrgKey));
  console.log(data);
  Object.keys(data).forEach(key => {
    formInput.elements[key].value = '';
  });
  localStorage.removeItem(localStrgKey);
}

submitBtnRef.addEventListener('click', submitForm);
