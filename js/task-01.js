const AllListsElements = document.querySelectorAll(".item");
console.log(`В списке ${AllListsElements.length} категории.`);


// const listsCategories = document.querySelectorAll('.item h2');
// listsCategories.forEach((element) =>{
//     console.log(`Категория: ${element.textContent}`);
// });
  
// const itemsCategories = document.querySelectorAll(".item ul");
// itemsCategories.forEach((list) => {
//     console.log(`Количество элементов ${list.children.length}`);

// });

AllListsElements.forEach((element) => {
    // console.log(element);
    console.log(`Категория: ${element.children[0].textContent}`);
    console.log(`Количество элементов ${element.lastElementChild.children.length}`);
})


