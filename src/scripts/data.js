// Исходный массив карточек
const cardobj = [
    {
      title: 'Frontend',
      img: './assets/images/backend.jpg',
      subscribe: 'Мы ищем опытных Frontend разработчиков',
    },
    {
      title: 'Backend',
      img: './assets/images/backend.jpg',
      subscribe: 'Мы ищем опытных Backend разработчиков',
    },
    {
      title: 'Devops',
      img: './assets/images/backend.jpg',
      subscribe: 'Мы ищем опытных Devops инженеров',
    },
  ];
  
  // Функция для получения всех карточек
  export function getCards() {
    return cardobj;
  }
  
  // Функция для добавления новой карточки
  export function addCard(newCard) {
    cardobj.push(newCard);
  }
  
  // Функция для обновления карточки по индексу
  export function updateCard(index, updatedCard) {
    cardobj[index] = updatedCard;
  }
  
  // Функция для удаления карточки по индексу
  export function deleteCard(index) {
    cardobj.splice(index, 1);
  }