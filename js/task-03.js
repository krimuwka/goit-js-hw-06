const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//for
// const ulItemEl = document.querySelector('.gallery')
// for (let i = 0; i < images.length; i += 1) {
//   const liItemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = images[i].url;
//   imageEl.alt = images[i].alt;
//   // imageEl.width = 640;
//   liItemEl.appendChild(imageEl)
//   ulItemEl.appendChild(imageEl)
//   //ulItemEl.append(liItemEl,imageEl)
// }
const ulItemElmap = document.querySelector('.gallery')
//map
// const ulElements = images.map(option => {
//   const liItemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = option.url;
//   imageEl.alt = option.alt;
//   // imageEl.width = 640;
//   // liItemEl.appendChild(imageEl)
//   // ulItemEl.appendChild(imageEl)
//   //ulItemEl.append(liItemEl,imageEl)
//   liItemEl.appendChild(imageEl)
//   return liItemEl;
// })
// console.log(ulElements)
// ulItemElmap.append(...ulElements)
//function
const makeImages = options => {
  return options.map(option => {
  const liItemEl = document.createElement('li');
  const imageEl = document.createElement('img');
  imageEl.src = option.url;
  imageEl.alt = option.alt;
  // imageEl.width = 640;
  // liItemEl.appendChild(imageEl)
  // ulItemEl.appendChild(imageEl)
  //ulItemEl.append(liItemEl,imageEl)
  liItemEl.appendChild(imageEl)
  return liItemEl;
})
}
const ulElements = makeImages(images);
ulItemElmap.append(...ulElements)