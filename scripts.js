var title = document.forms.someform.elements.title;
var author = document.forms.someform.elements.author;
var submit = document.forms.someform.elements.submit;
var draw = document.forms.someform.elements.draw;
var posts = document.getElementById('posts');
var xhr = new XMLHttpRequest();

submit.onclick = function () {
    xhr.open('POST', 'http://localhost:3000/posts');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log( xhr.status + ': ' + xhr.statusText );
            }
        }
    };

    xhr.send(JSON.stringify({title: title.value, author: author.value}));
};

draw.onclick = function () {
    xhr.open('GET', 'http://localhost:3000/posts');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                addData(data);
            } else {
                console.log( xhr.status + ': ' + xhr.statusText );
            }
        }
    };

    xhr.send();
};

function addData(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var newData = document.createElement("p");
        newData.innerText = data[i]['id'] + '. ' + data[i]['title'] + ' - ' + data[i]['author'];
        posts.appendChild(newData);
    }
}