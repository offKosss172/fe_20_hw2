// function showCustomAlert() {
//     alert("Привет!");
// }
// showCustomAlert();

/*
теория
Конструкция try...catch в JavaScript используется для обработки ошибок в программе

-не совсем понял вопрос 
- когда? ну вот к примеру когда код приложения в реакте ошибка может полностью поломать приложение и вот в этом 
случае опасный кусок кода в котором может быть ошибка доцильно положить в трай  и в кетч выведется ошибка (которую мы увидем в консоле)


*/


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
    if (isValidBook(book)) {
      const liElement = document.createElement('li');
      liElement.textContent = `${book.author || 'Автор неизвестен'} - ${book.name} - Ціна: ${book.price || 'Ціна не вказана'}`;
      ulElement.appendChild(liElement);
    } else {
      console.error(`Об'єкт не має всіх необхідних властивостей:`, book);
    }
  });

  rootElement.appendChild(ulElement);
}

generateBookList(books);

  