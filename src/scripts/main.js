import { getCards, addCard, updateCard, deleteCard } from './data.js';
import { createCard, clearInputs } from './dom.js';
import { openModal } from './modal.js';
import '../styles/style.css';

// Инициализация карточек при загрузке страницы
const cards = getCards();
cards.forEach((card, index) => {
  createCard(card, index, handleRemove, handleFavorite, handleEdit);
});

// Обработчик добавления новой карточки
const addCardBtn = document.querySelector('.addCard');
addCardBtn.addEventListener('click', () => {
  const addTitle = document.querySelector('.input__title').value.trim();
  const addSrc = document.querySelector('.input__src').value.trim();
  const addDescription = document.querySelector('.input__description').value.trim();

  if (addTitle && addSrc && addDescription) {
    const newCard = {
      title: addTitle,
      img: addSrc,
      subscribe: addDescription,
    };

    addCard(newCard);
    createCard(newCard, cards.length - 1, handleRemove, handleFavorite, handleEdit);
    clearInputs();
  }
});

// Обработчик удаления карточки
function handleRemove(index) {
  deleteCard(index);
  refreshCards();
}

// Обработчик добавления в избранное (можно добавить логику сохранения состояния)
function handleFavorite(index) {
  console.log(`Карточка ${index} добавлена в избранное`);
}

// Обработчик редактирования карточки
function handleEdit(index) {
  const card = cards[index];
  openModal(index, card, (index, updatedCard) => {
    updateCard(index, updatedCard);
    refreshCards();
  });
}

// Функция для обновления списка карточек
function refreshCards() {
  const cardList = document.querySelector('.card__link');
  cardList.innerHTML = ''; // Очищаем список
  getCards().forEach((card, index) => {
    createCard(card, index, handleRemove, handleFavorite, handleEdit);
  });
}