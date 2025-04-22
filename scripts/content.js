window.addEventListener('load', function() {
    // Function to safely set the value of an element
    function setElementValue(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.value = value;
        }
    }

    // Set values ​​if elements exist
    setElementValue("ageDay", "23");       // Day
    setElementValue("ageMonth", "December"); // Month
    setElementValue("ageYear", "2000");     // Year

    // Find and click the button if it exists
    const viewProductPageBtn = document.getElementById("view_product_page_btn");
    if (viewProductPageBtn) {
        viewProductPageBtn.click();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event handlers only if elements exist
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
