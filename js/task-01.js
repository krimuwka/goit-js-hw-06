console.log('Number of categories: ', document.querySelectorAll('.item').length);// Number of categories: 3
console.log('Category: ', document.querySelector('.item').firstElementChild.textContent);// Category: Animals
console.log('Elements: ', document.querySelector('.item ul').childElementCount);// Elements: 4
console.log('Category: ', document.querySelectorAll('.item')[1].firstElementChild.textContent);// Category: Products
console.log('Elements: ', document.querySelectorAll('.item')[1].lastElementChild.childElementCount);// Elements: 3
console.log('Category: ', document.querySelectorAll('.item')[2].firstElementChild.textContent);// Category: Technologies
console.log('Elements: ', document.querySelectorAll('.item')[2].lastElementChild.childElementCount);// Elements: 5