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

let checkColor = (color) => {
    let regColor = /#[a-f0-9]{3}|#[a-f0-9]{6}|red|aqua|gray|navy|silver|black|green|olive|teal|blue|lime|purple|white|fuchsia|maroon|yellow|rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*[\d.]+\s*)?\)/i;
    if (!regColor.test(color)) {
        console.log("Color is invalid! Color = '000000'");
        return "#000000";
    }
    return color;
};

let checkDiameter = (diameter) => {
    let regDiameter = /^(\d){1,3}$/g;
    if (!regDiameter.test(Number(diameter))) {
        console.log("Diameter is invalid! Diameter = '250px'");
        return "250";
    }
    return diameter;
};

let drawCircle = () => {
    let diam = document.forms["forma"].elements["diameter"].value;
    let color = document.forms["forma"].elements["color"].value;

    let circle = document.createElement('div');
    diam = checkDiameter(diam);
    color = checkColor(color.toLowerCase());
    circle.style.width = diam + "px";
    circle.style.height = diam + "px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = color;

    document.body.innerHTML = "";
    document.body.appendChild(circle);
};

let inputData = () => {
    document.body.innerHTML = "";
    document.body.innerHTML =
        "<form id='forma'>" +
            "<input id='diameter' type='text' value='' placeholder='input diameter value, px' />" +
            "<input id='color' type='text' value='' placeholder='input color value' />" +
            "<input id='runDraw' type='button' value='Draw' onclick='drawCircle()' />" +
        "</form>";
};
