const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeFontSizeBySpan);

 function onChangeFontSizeBySpan(event)  {
    spanEl.setAttribute('style', `font-size:${event.currentTarget.value}px`);
console.log(event.currentTarget.value)
};