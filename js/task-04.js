let valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },
  
    decrement(){
       this.value -= 1;
    },
};

  
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick(ev) {   
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
    console.log('минусую');
}



incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick(ev) {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
    console.log('плюсую');
   
}