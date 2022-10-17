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

formInput.addEventListener('input', event => {
  formInputData[event.target.name] = event.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formInputData));
});

const submitBtnRef = document.querySelector('[type="submit"]');
function submitForm(event) {
  event.preventDefault();
  console.log(formInputData);
  const data = JSON.parse(localStorage.getItem(LS_KEY));
  Object.keys(data).forEach(key => {
    formInput.elements[key].value = '';
    formInputData[key] = '';
  });
  localStorage.clear();
}

submitBtnRef.addEventListener('click', submitForm);
