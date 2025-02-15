const crocodileFacts = [
    "Crocodiles are reptiles that belong to the order Crocodylia.",
    "They are found in tropical regions of Africa, Asia, the Americas, and Australia.",
    "Crocodiles can live for over 70 years in the wild.",
    "They are carnivorous and primarily eat fish, birds, and mammals.",
    "Crocodiles have powerful jaws that can exert tremendous pressure.",
    "They are excellent swimmers and can hold their breath underwater for over an hour.",
    "Crocodiles are ectothermic, meaning they rely on external sources to regulate their body temperature.",
    "They have a unique ability to see in the dark, thanks to a special membrane in their eyes.",
    "Crocodiles communicate through a variety of vocalizations, including growls and hisses.",
    "Some species of crocodiles can reach lengths of over 20 feet (6 meters)."
];

const factDisplay = document.getElementById('factDisplay');
const newFactButton = document.getElementById('newFactButton');

newFactButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * crocodileFacts.length);
    factDisplay.textContent = crocodileFacts[randomIndex];
    factDisplay.style.opacity = 0; // Start with opacity 0 for fade-in effect
    setTimeout(() => {
        factDisplay.style.opacity = 1; // Fade in
    }, 100); // Delay to allow for the opacity change
});
