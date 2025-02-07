const page = document.querySelector('body');
const cardobj = [
   {
      title: 'Frontend',
      img: './assets/images/frontend.jpg',
      subscribe: 'Мы ищем опытных Frontend разработчиков',
      delete: './assets/icon/delete.png'
   },
   {
      title: 'Backend',
      img: './assets/images/backend.jpg',
      subscribe: 'Мы ищем опытных Backend разработчиков',
      delete: './assets/icon/delete.png'
   }
]

const template = page.querySelector('.item__template').content
const cardAdd = page.querySelector('.card__link')

function clone(obj) {
   const clonetemplate = template.cloneNode(true)

   clonetemplate.querySelector('.card__title').textContent = obj.title
   clonetemplate.querySelector('.card__img').src = obj.img
   clonetemplate.querySelector('.card__description').textContent = obj.subscribe

   removecard(clonetemplate)
   addfavorits(clonetemplate)

   cardAdd.appendChild(clonetemplate)
}

cardobj.forEach(item => {
   clone(item)
});


function removecard(clone) {
   const remove = clone.querySelector('.remove__curd')
   remove.addEventListener('click', () => {
      remove.parentElement.parentElement.remove();
   })
}

function addfavorits(clone) {
   const favorits = clone.querySelector('.favorits__btn')
   favorits.addEventListener('click', () => {
      favorits.classList.toggle('favorits__activ');
   });
}


