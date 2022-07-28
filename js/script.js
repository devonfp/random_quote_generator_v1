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
  year: '2004',
  tags: " - emotion, love, self-respect, value"
  },
  
  
  {
    quote: '  I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
    source: 'Albert Einstein'
  },
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

  //randomNumber and quotes[randomNumber] are our main variables.

  const randomNumber = Math.floor( Math.random() * quotes.length);

  
  console.log(randomNumber, quotes[randomNumber]);


  return quotes[randomNumber];

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

  if (randomQuote.citation) {
  randomQuotehtml += `<span class="citation"> ${randomQuote.citation}</span>`
  }

  if (randomQuote.year) {
  randomQuotehtml += `<span class="year">${randomQuote.year}</span>`
  }

  if (randomQuote.tags) {
    randomQuotehtml += `<span class="tags">${randomQuote.tags}</span>`
  }

    randomBackground();
    quoteInterval();
    /**
     * Calling these functions in the printQuote() function
    ensures that it gets printed into the DOM.
    **/ 


  document.getElementById('quote-box').innerHTML = randomQuotehtml;
}


/** 
 *`quoteInterval function.`
 *This ensures we get a new quote after clicking "Show Another Quote." 
**/
function quoteInterval() {
  clearInterval(myInterval);
  myInterval = setInterval(printQuote, 10000);
}

let myInterval = setInterval(printQuote, 10000);




/**
 * `randomBackground function.` 
 * This ensures we get a new body background color after clicking "Show Another Quote." 
**/
function randomBackground() {

  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  document.body.style.backgroundColor = `${randomRGB}`;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);