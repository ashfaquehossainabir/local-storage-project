function submit() {
    const userInput = document.getElementById("userName").value;
    const display = document.getElementById("display");

    display.textContent = userInput;
    localStorage.setItem("name", userInput);
}

window.onload = function() {
    const display = document.getElementById("display");
    var storedInput = localStorage.getItem("name");

    if(storedInput) {
        display.textContent = storedInput;
    }
}