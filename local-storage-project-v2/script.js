//========================================================================
//-- Username Popup Box
//========================================================================

const submitButton = document.querySelector('.submitBtn');
const userPopup = document.querySelector('.user-popup');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector("#close");

closeButton.addEventListener("click", function() {
  overlay.style.display = "none";
  userPopup.style.display = "none";
});

// After Submission User popup will close
submitButton.addEventListener('click', () => {
  userPopup.style.display = 'none';
  overlay.style.display = 'none';
});

function submit() {
    const userInput = document.getElementById("userInput").value;
    const display = document.getElementById("display");

    display.textContent = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    localStorage.setItem("name", userInput);
}

window.onload = function() {
    const display = document.getElementById("display");
    const userPopup = document.querySelector('.user-popup');
    const overlay = document.getElementById('overlay');
    var storedData = localStorage.getItem("name");

    if(storedData) {
        display.textContent = storedData.charAt(0).toUpperCase() + storedData.slice(1);
        overlay.style.display = "none";
        userPopup.style.display = "none";
    } else {
        overlay.style.display = "block";
        userPopup.style.display = "block";
    }
}