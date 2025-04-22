window.addEventListener('load', function() {
    // Функция для безопасной установки значения элемента
    function setElementValue(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.value = value;
        }
    }

    // Устанавливаем значения, если элементы существуют
    setElementValue("ageDay", "23");       // День
    setElementValue("ageMonth", "December"); // Месяц
    setElementValue("ageYear", "2000");     // Год

    // Находим и кликаем кнопку, если она существует
    const viewProductPageBtn = document.getElementById("view_product_page_btn");
    if (viewProductPageBtn) {
        viewProductPageBtn.click();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчики событий только если элементы существуют
    const playSoundLink = document.getElementById("playSoundLink");
    if (playSoundLink) {
        playSoundLink.addEventListener("click", function(event) {
            event.preventDefault();
            const audio = document.getElementById("soundEffect");
            if (audio) {
                audio.play();
            }
        });
    }

    const playSoundLink1 = document.getElementById("playSoundLink1");
    if (playSoundLink1) {
        playSoundLink1.addEventListener("click", function(event) {
            event.preventDefault();
            const audio = document.getElementById("soundEffect1");
            if (audio) {
                audio.play();
                setTimeout(function() {
                    window.open("https://github.com/1mcold", "_blank");
                }, 500);
            }
        });
    }
});
