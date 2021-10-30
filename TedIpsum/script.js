const paragraph = [
  "I didn’t float up the Lagan in a bubble.", 
  "Now we’re cooking with gas! None of my people would plant evidence. They know I would throw the book at them. Followed by the bookshelf.", 
  "Now we’re sucking diesel! Mother of god! There’s only one thing I’m interested in...", 
  "We do our duty to the letter of the law. The letter! The name is Superintendent Hastings, like the battle.", 
  "For years, the security in this department has been watertight… then you come along, suddenly we’re leaking like a colander.", 
  "We’ve been round the houses, Steve. Round the houses and down the bloody drains. Go back to the coal face, the pair of you, unless you’ve got more egg-sucking tips for your granny.", 
  "Your team was pausing the game but you went and gave away a penalty. Here's your bent copper for the 21st century.", 
  "God, give me strengh. I am calm! I'm totally bloody calm!", 
  "Jesus, Mary and Joseph! Reg 15. Fella!"
];


const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * paragraph.length);

  if (isNaN(value) || value < 0 || value > 40) {
    result.innerHTML = `<p class="result">${paragraph[random]}</p>`;
  } else {
    let tempText = paragraph.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join('');
    result.innerHTML = tempText;
    
  }
});


const randIndex1 = Math.floor(Math.random() * paragraph.length);
const randIndex2 = Math.floor(Math.random() * paragraph.length);
const randIndex3 = Math.floor(Math.random() * paragraph.length);
let testResult = `${paragraph[randIndex1]} ${paragraph[randIndex2]} ${paragraph[randIndex3]}`;
console.log(testResult);
