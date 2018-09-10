/*
 Нарисовать на странице круг используя параметры, которые введет пользователь.

 Технические требования:
 - При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". Данная кнопка должна являться
 единственным контентом в теле HTML документа, весь остальной контент должен быть создан и добавлен на страницу
 с помощью Javascript.
 - При нажатии на кнопку - вместо нее показать два поля ввода. В первом пользователь сможет ввести диаметр круга
 в пикселях. Во втором - цвет круга (в любом формате, который понимает CSS - имя цвета, RGB, HEX, HSL).
 - Под полями ввода должна быть кнопка "Нарисовать". При нажатии - на странице должен появиться круг заданного
 пользователем диаметра и с заливкой указанного цвета.
*/

let drawCircle = () => {
    let diam = document.forms["forma"].elements["diameter"].value;
    let color = document.forms["forma"].elements["color"].value;

    let circle = document.createElement('div');
    circle.style.width = diam + "px";
    circle.style.height = diam + "px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = color.toLowerCase();

    document.body.innerHTML = "";
    document.body.appendChild(circle);
};

let inputData = () => {
    document.body.innerHTML = "";
    document.body.innerHTML =
        "<form id='forma'>" +
            "<input id='diameter' type='text' value='' placeholder='input diameter value' />" +
            "<input id='color' type='text' value='' placeholder='input color value' />" +
            "<input id='runDraw' type='button' value='Draw' onclick='drawCircle()' />" +
        "</form>";
};
