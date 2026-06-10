const quotes = [
    "Your GPA can't hear your excuses.",
    "Coffee is temporary. Results are forever.",
    "Future You is watching.",
    "Study now, thank yourself later.",
    "Don't panic. Panic never passed an exam.",
    "One more reel or one more chapter? Choose wisely.",
    "Sleep is part of preparation.",
    "Focus on marks, not miracles.",
    "Coffee can help. Magic cannot.",
    "Your future salary is hidden inside today's study session."
];
const randomQuote =
quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").innerText =
randomQuote;