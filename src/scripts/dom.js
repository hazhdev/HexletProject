// Функция для создания карточки
export function createCard(obj, index, onRemove, onFavorite, onEdit) {
    const page = document.querySelector('body');
    const template = page.querySelector('.item__template').content;
    const cardAdd = page.querySelector('.card__link');
  
    const clonetemplate = template.cloneNode(true);
  
    clonetemplate.querySelector('.card__title').textContent = obj.title;
    clonetemplate.querySelector('.card__img').src = obj.img;
    clonetemplate.querySelector('.card__description').textContent = obj.subscribe;
  
    // Кнопка удаления
    const removeBtn = clonetemplate.querySelector('.remove__curd');
    removeBtn.addEventListener('click', () => {
      onRemove(index);
      removeBtn.closest('.itemCard').remove();
    });
  
    // Кнопка избранного
    const favoritsBtn = clonetemplate.querySelector('.favorits__btn');
    favoritsBtn.addEventListener('click', () => {
      favoritsBtn.classList.toggle('favorits__activ');
      onFavorite(index);
    });
  
    // Кнопка редактирования
    const editBtn = clonetemplate.querySelector('.edit__btn');
    editBtn.addEventListener('click', () => {
      onEdit(index);
    });
  
    cardAdd.appendChild(clonetemplate);
  }
  
  // Функция для очистки полей ввода
  export function clearInputs() {
    const page = document.querySelector('body');
    page.querySelector('.input__title').value = '';
    page.querySelector('.input__src').value = '';
    page.querySelector('.input__description').value = '';
  }