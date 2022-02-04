import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const inputRef = document.querySelector('.feedback-form input');

const formData = {};

formRef.addEventListener('submit', onSubmit);
formRef.addEventListener('input', throttle(onInput, 500));

inputText();

function onSubmit(e) {
  e.preventDefault();

  if (inputRef.value && textareaRef.value) {
    console.log({
      email: inputRef.value,
      message: textareaRef.value,
    });

    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
}

function onInput(e) {

    const formData = {
    email: inputRef.value,
    message: textareaRef.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function inputText() {
  const text = localStorage.getItem('feedback-form-state');

  if (text) {
    inputRef.value = JSON.parse(text).email || '';
    textareaRef.value = JSON.parse(text).message || '';
  }
}
