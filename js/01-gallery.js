import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPick = document.querySelector('.gallery');
const createdPics = createPics(galleryItems);
console.log(galleryItems);

galleryPick.addEventListener('click', onImgPic)

galleryPick.insertAdjacentHTML('afterbegin', createdPics)
function createPics(galleryItems) {
    return galleryItems.map(({preview, original, description})=> { 
  return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
    }).join("")
}

function onImgPic(event){
  event.preventDefault();
  const picImage = event.target;
  const instance = basicLightbox.create(`
<div class="modal">
   <img src = "${picImage.dataset.source}"/>
</div>
`)
instance.show()
}

// function onClose(){
//   document.addEventListener('keydown', evt =>{
// if(evt.key === "Escape"){
//   console.log(evt);
//   const picImage = evt.target;
// const instance = basicLightbox.create(`
// <div class="modal">
//    <img src = "${picImage.dataset.source}"/>
// </div>
// `)
  
//   instance.close()
// }
//   })
// }
