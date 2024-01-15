var Slice = function() {
    var sliceDiv = document.getElementById('slice');
    var gridX = 4;
    var gridY = 2;
    var w = sliceDiv.offsetWidth;
    var h = sliceDiv.offsetHeight;
    var img = document.querySelectorAll('#slice img')[0].src;
    var delay = 0.05;
    var isCreating = false; // Флаг для отслеживания процесса создания срезов

    console.log(w, h, img);

    this.create = function() {
        isCreating = true; // Установим флаг в true перед началом создания срезов
        for (x = 0; x < gridX; x++) {
            var width = x * w / gridX + "px";
            var div = document.createElement("div");
            document.getElementById('slice').appendChild(div);
            div.style.left = width;
            div.style.top = 0; 
            div.style.width = w / gridX + "px";
            div.style.height = h + "px";
            div.style.backgroundImage = "url(" + img + ")";
            div.style.backgroundPosition = "-" + width;
            div.style.backgroundSize = w + "px";
            div.style.transitionDelay = x * delay + "s";
        }
    }

    this.create();

    // Добавим обработчик события transitionend для отслеживания окончания анимации
    sliceDiv.addEventListener('transitionend', function() {
        if (isCreating) {
            isCreating = false; // Сбросим флаг после завершения создания срезов
            setTimeout(function() {
                sliceDiv.classList.remove('active'); // Уберем класс 'active' после 5 секунд
            }, 5000);
        }
    });

    document.getElementById("slice").onmouseover = function() {mouseOver()};
    document.getElementById("slice").onmouseout = function() {mouseOut()};
   
    function mouseOver() {
        sliceDiv.classList.add('active');  
    }

    function mouseOut() {
        // Ничего не делаем, так как класс 'active' будет убран через setTimeout
    }
}

window.onload = function() {
    var slice = new Slice();
};


//ТЕКСТ

this.create = async function () {
    isCreating = true; // Установим флаг в true перед началом создания срезов

    // Массив времени задержек для каждого текста (в секундах)
    var textDelays = [5, 8, 10, 12];

    for (let x = 0; x < gridX; x++) {
        await new Promise(resolve => setTimeout(resolve, textDelays[x] * 1000));

        var width = x * w / gridX + "px";
        var div = document.createElement("div");
        var textTop = document.createElement("div");
        var textBottom = document.createElement("div");

        document.getElementById('slice').appendChild(div);
        div.appendChild(textTop);
        div.appendChild(textBottom);

        div.style.left = width;
        div.style.top = 0;
        div.style.width = w / gridX + "px";
        div.style.height = h + "px";
        div.style.backgroundImage = "url(" + img + ")";
        div.style.backgroundPosition = "-" + width;
        div.style.backgroundSize = w + "px";
        div.style.transitionDelay = x * delay + "s";

        textTop.className = "text top";
        textBottom.className = "text bottom";

        textTop.innerText = "Ваш текст сверху";
        textBottom.innerText = "Ваш текст снизу";

        textTop.style.opacity = 1;
        textTop.style.transform = "translateY(0)";

        textBottom.style.opacity = 1;
        textBottom.style.transform = "translateY(0)";
    }
}
