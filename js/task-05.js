const inputEl = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputEl.addEventListener('input', onInpytChange);

function onInpytChange(event) {
    console.log(event.currentTarget.value);
    nameOutput.textContent = event.currentTarget.value;
    if (inputEl.textContent = !event.currentTarget.value) {
        nameOutput.textContent = 'незнакомец';
   }

}
