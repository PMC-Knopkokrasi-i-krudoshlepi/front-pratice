const axios = require('axios');

// Делаем запрос пользователя с данным ID
axios.get('http://localhost:8080/api/tests/1399124932')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });

// // Хотите использовать async/await? Добавьте ключевое слово `async` к своей внешней функции/методу.
// async function getTests() {
//   try {
//     const response = await axios.get('http://localhost:8080/api/tests/1399124932');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }