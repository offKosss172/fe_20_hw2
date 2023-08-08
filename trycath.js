const books = [
  { 
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70 
  }, 
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  }, 
  { 
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  }, 
  { 
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  }, 
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  }
];

function isValidBook(book) {
  return book.hasOwnProperty('author') && book.hasOwnProperty('name') && book.hasOwnProperty('price');
}

function generateBookList(booksArray) {
  const rootElement = document.getElementById('root');
  const ulElement = document.createElement('ul');

  booksArray.forEach(book => {
    try {
      if (isValidBook(book)) {
        const liElement = document.createElement('li');
        liElement.textContent = `${book.author || 'Автор неизвестен'} - ${book.name} - Ціна: ${book.price || 'Ціна не вказана'}`;
        ulElement.appendChild(liElement);
      } else {
        throw new Error("Об'єкт не має всіх необхідних властивостей: author, name, price");
      }
    } catch (error) {
      console.error(error);
    }
  });

  rootElement.appendChild(ulElement);
}

generateBookList(books);

  