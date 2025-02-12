const page = document.querySelector('body');
const cardobj = [
   {
      title: 'Frontend',
      img: './assets/images/backend.jpg',
      subscribe: 'Мы ищем опытных Frontend разработчиков',
   },
   {
      title: 'Backend',
      img: './assets/images/backend.jpg',
      subscribe: 'Мы ищем опытных Backend разработчиков'
   },
   {
      title: 'Devops',
      img: './assets/images/backend.jpg',
      subscribe: 'Мы ищем опытных Devops инженеров'
   }
];

const template = page.querySelector('.item__template').content;
const cardAdd = page.querySelector('.card__link');
const addCard = page.querySelector('.addCard');

function clone(obj) {
   const clonetemplate = template.cloneNode(true);

   clonetemplate.querySelector('.card__title').textContent = obj.title;
   clonetemplate.querySelector('.card__img').src = obj.img;
   clonetemplate.querySelector('.card__description').textContent = obj.subscribe;

   removecard(clonetemplate);
   addfavorits(clonetemplate);

   cardAdd.appendChild(clonetemplate);
}

cardobj.forEach(item => {
   clone(item);
});

function removecard(clone) {
   const remove = clone.querySelector('.remove__curd');
   remove.addEventListener('click', () => {
      remove.closest('.itemCard').remove();
   });
}

function addfavorits(clone) {
   const favorits = clone.querySelector('.favorits__btn');
   favorits.addEventListener('click', () => {
      favorits.classList.toggle('favorits__activ');
   });
}

function addNewCard() {
   const addTitle = page.querySelector(".input__title").value.trim();
   const addSrc = page.querySelector('.input__src').value.trim();
   const addDescription = page.querySelector(".input__description").value.trim();

   const newCard = {
      title: addTitle,
      img: addSrc,
      subscribe: addDescription
   };

   clone(newCard);

   addTitle.value = '';
   addSrc.value = '';
   addDescription.value = '';
}

addCard.addEventListener('click', () => {
   addNewCard();
});