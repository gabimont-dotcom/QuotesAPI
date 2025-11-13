// quotes.js

// Paste the JSON results from the ZenQuotes "kindness" API into this variable:
const quotesData = [
  {
    "q": "Kindness is the language which the deaf can hear and the blind can see.",
    "a": "Mark Twain"
  },
  {
    "q": "No act of kindness, no matter how small, is ever wasted.",
    "a": "Aesop"
  },
  {
    "q": "Be kind whenever possible. It is always possible.",
    "a": "Dalai Lama"
  },
  {
    "q": "Carry out a random act of kindness, with no expectation of reward.",
    "a": "Princess Diana"
  },
  {
    "q": "A warm smile is the universal language of kindness.",
    "a": "William Arthur Ward"
  },
  {
    "q": "You can accomplish by kindness what you cannot by force.",
    "a": "Publilius Syrus"
  },
  {
    "q": "The smallest act of kindness is worth more than the grandest intention.",
    "a": "Oscar Wilde"
  },
  {
    "q": "Kind words can be short and easy to speak, but their echoes are truly endless.",
    "a": "Mother Teresa"
  },
  {
    "q": "Wherever there is a human being, there is an opportunity for kindness.",
    "a": "Seneca"
  },
  {
    "q": "One kind word can warm three winter months.",
    "a": "Japanese Proverb"
  }
];

// Select the container
const container = document.getElementById("quotes-container");

// Loop through the quotes and display them
quotesData.forEach(item => {
  const box = document.createElement("div");
  box.classList.add("quote-box");

  const quote = document.createElement("p");
  quote.classList.add("quote");
  quote.textContent = `"${item.q}"`;

  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = `- ${item.a}`;

  box.appendChild(quote);
  box.appendChild(author);
  container.appendChild(box);
});
