var title = document.forms.someform.elements.title;
var author = document.forms.someform.elements.author;
var submit = document.forms.someform.elements.submit;
var draw = document.forms.someform.elements.draw;
var posts = document.getElementById('posts');
var xhr = new XMLHttpRequest();

// Пост добавляется в bd.json, но xhr.status ВСЕГДА возвращает 0, как бы я не пробовал - проверку не сделать.
// xhr.onreadystatechange соответственно никогда не выполняется. Без понятия, в чем проблема.

submit.onclick = function () {
    xhr.open('POST', 'http://localhost:3000/posts');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({title: title.value, author: author.value}));
};

// Получение постов работает, но странно. Если не отправлять новый GET запрос, выводится последний отправленный вариант.
// xhr.responseText возвращает строку:
//{
//"title": "Test1",
//"author": "Test2",
//"id": 27
//}
//Но в JSON она не парсится почему-то.

//Если писать новый GET запрос выбивает ошибку:
// "SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data"
// xhr.responseText возвращает пустую строку.
//Что я делаю не так?

draw.onclick = function () {
    //xhr.open('GET', 'http://localhost:3000/posts');
    var data = xhr.responseText;
    addData(data);
};

function addData(data) {
    var newData = document.createElement("p");
    newData.innerText = data;
    posts.appendChild(newData);
}