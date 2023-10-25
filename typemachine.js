const typeMachineText = document.getElementById("type-machine-text");
const textToType = "Exploring the <span class='gradient-text'>Frontiers</span> of \n Artificial Intelligence";
let charIndex = 0;
let currentText = "";

function typeMachine() {
    if (charIndex < textToType.length) {
        if (textToType.charAt(charIndex) === "\n") {
            currentText += "<br/>";
        } else {
            if (charIndex === 0 || textToType.charAt(charIndex - 1) === "\n") {
                currentText += textToType.charAt(charIndex).toUpperCase();
            } else {
                currentText += textToType.charAt(charIndex);
            }
        }
        typeMachineText.innerHTML = currentText;
        charIndex++;
        const delay = textToType.charAt(charIndex - 1) === "\n" ? 0 : 30;
        setTimeout(typeMachine, delay); // Adjust the delay based on character type
    }
}

setTimeout(typeMachine, 2500); // Delay of 2 seconds before typing starts
