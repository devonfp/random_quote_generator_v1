/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/

const quotes = [

  {
  quote: " It's the possibility of having a dream come true that makes life interesting. ",
  source: 'Paulo Coelho, The Alchemist',
  },
  
  {
  quote: " Nothing is impossible, the word itself says 'I'm possible'!",
  source: 'Audrey Hepburn',
  },
  
  
  {
    quote: ' Peace begins with a smile..  ',
    source: ' Mother Teresa ',
  },
  
  {
  quote: " Love is or it ain't. Thin love ain't love at all.",
  source: 'Toni Morrison',
  citation: "Beloved",
  year: 2004
  },
  
  
  {
    quote: '  I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
    source: 'Albert Einstein'
  },
];
//console.log(quotes);



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

  //randomNumber and quotes[randomNumber] are our 2 variables to make this function work.

  const randomNumber = Math.floor( Math.random() * quotes.length);
/*This variable ensures that a random number is generated each time
according to the length of the amount of objects. */
  
  console.log(randomNumber, quotes[randomNumber]);
/*by adding quotes we tell the program to randomly go to each index in that array,
  // then by using brackets we will insert [randomNumber] to randomly select
  // an object in that array.*/  

  return quotes[randomNumber];
  /*Functions must give something back when they finish. Hence, we end with return. 
   Without returning, getRandomQuote() will call as undefined.*/ 
}

getRandomQuote();


/***
 * `printQuote` function
***/
function printQuote() {

const randomQuote = getRandomQuote();

let randomQuotehtml = `
<p class="quote"> ${randomQuote.quote} </p> 
  <p class="source"> ${randomQuote.source}`

  if (randomQuote.citation === true) {
  `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  <span class="citation"> ${randomQuote.citation}</span>`
  }

  if (randomQuote.year === true) {
  `<p class="quote"> ${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
      <span class="citation"> ${randomQuote.citation} </span>
      <span class="year">${randomQuote.year}</span>
      </p>`
  }

  document.getElementById('quote-box').innerHTML = randomQuotehtml;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);