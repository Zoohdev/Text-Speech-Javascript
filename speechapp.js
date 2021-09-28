const button = document.querySelector(".talk");
const content = document.querySelector(".content");


const greetings = ["I am good sis,how about you?",


];



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

button.addEventListener("click", () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = greetings;

    if (message.includes("How are you?")) {
        const lastText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = lastText;
    }


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

};