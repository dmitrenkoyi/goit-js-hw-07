const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const IngredientsEl = document.querySelector('#ingredients');

const addListElementsIngredients = (elements) => {
    return elements.map(element => {
        const itemEl1 = document.createElement('li');
        itemEl1.textContent = element;

        return itemEl1;

    });
};

const listElements = addListElementsIngredients(ingredients);
IngredientsEl.append(...listElements);

console.log(IngredientsEl);
