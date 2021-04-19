const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const currentValue = event.currentTarget.value
    const dateLength = parseInt(inputEl.getAttribute('data-length'));
    
    if (currentValue.length === dateLength) {
        inputEl.classList.add("valid");

  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
