document.addEventListener("DOMContentLoaded", function() {
    const menuBar = document.getElementById("menu-bar");
    let delayTimer;

    // Close navbar when clicking outside
    document.addEventListener("click", function(event) {
        if (menuBar.checked && event.target !== menuBar) {
            clearTimeout(delayTimer);
                    delayTimer = setTimeout(function() {
                        menuBar.checked = false;
                    }, 100);
        }
    });
});