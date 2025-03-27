// Открытие модального окна
export function openModal(index, card, onSave) {
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title');
    const modalSrc = modal.querySelector('.modal__src');
    const modalDescription = modal.querySelector('.modal__description');
  
    // Заполняем поля текущими данными карточки
    modalTitle.value = card.title;
    modalSrc.value = card.img;
    modalDescription.value = card.subscribe;
  
    modal.style.display = 'block';
  
    // Обработчик кнопки "Сохранить"
    const saveBtn = modal.querySelector('.modal__save');
    saveBtn.onclick = () => {
      const updatedCard = {
        title: modalTitle.value.trim(),
        img: modalSrc.value.trim(),
        subscribe: modalDescription.value.trim(),
      };
      onSave(index, updatedCard);
      closeModal();
    };
  
    // Обработчик кнопки "Закрыть"
    const closeBtn = modal.querySelector('.modal__close');
    closeBtn.onclick = () => {
      closeModal();
    };
  }
  
  // Закрытие модального окна
  export function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }