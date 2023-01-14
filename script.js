const reviews = [
  "This is due to their excellent service, competitive pricing and customer support.",
  "\'\'I actually don\'t even understand why this fool put me in there, but yeah, I really like the service\'\'",
  "\'\'You better watch The Walking Dead, don't distract me from pretending to be a based sigma male\'\'",
  "\'\'I wrote this web application so I can sincerely say that I could make this better fr fr\'\'"
]

const authors = ["Zoltan Nemeth","Roman Nechydiuk", "Nazar Malizdersky", "Dave"];



const review = document.querySelector('.review');
const author = document.querySelector('.author');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let current = 0;

prevBtn.addEventListener('click', () => {
  if (current <= 0) {
    current = reviews.length;
  }

  current--;

  review.textContent = reviews[current];
  author.textContent = authors[current];
})

nextBtn.addEventListener('click', () => {
  if (current >= reviews.length - 1) {
    current = -1;
  }

  current++;

  review.textContent = reviews[current];
  author.textContent = authors[current];
})

