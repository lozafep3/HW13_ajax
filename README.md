1. установить:
 - https://nodejs.org/uk/
 - зайти в консоль или терминал  и выполнить команду:
npm install -g json-server

2. затем зайти в папку с файлом db.json и запустить команду в консоли
json-server --watch db.json
чтобы остановить сервер нажмите вместе комбинацию клавиш в консоли:
CTRL C

3. использовать ajax для получения постов и создания постов.

4. при загрузке страницы нужно вывести список всех постов.

5. под списком постов разместить форму для создания поста:
title и author
при нажатии на кнопку create отправить запрос на создание поста

6. при успешном создании поста отобразить пост в конце или начале списка

7. при возникновении ошибки показать сообщение (можно вывести в консоль)

api:
get http://localhost:3000/posts // получение всех постов
post http://localhost:3000/posts // создание поста (не забываем передать данные)
!!!!
Данная api при создании возвращает 201 статус код - Success

Напоминания
Когда используем
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
Нам не нужно разбивать ключ значение и разделять через &.
Нужно обьекту сделать:
JSON.stringify(обьект)
xhr.send(JSON.stringify(обьект))

Кому интересно более детальная информация о json-server:
https://github.com/typicode/json-server