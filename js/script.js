// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Quotes Array
const quotes = [
    {
        quote: "There is nothing permanent except change.",
        source: "Heraclitus"
        },

    {
        quote: "You cannot shake hands with a clenched fist.",
        source: "Indira Gandhi "
        },

    {
        quote: "All that we see or seem is but a dream within a dream..",
        source: "Edgar Allan Poe "
        },

    {
        quote: "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
        source: "William Blake"
        },

    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss"
        }, 

    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Alber Einstein"
    },

    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        source: "Oscar Wilde"
    }
];

// Get random quote from array and return random quote object
function getRandomQuote () {
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    return randomQuote;
}

/* Create randomRGB function and set variables for each of the colors and concat into a string

Call getRandomQuote in a function and store the returned quote in a variable.
    Function constructs a string containing the different properties of the quote object using the following HTML template: 

        <p class="quote"> [quote here] </p>
        <p class="source"> [source here]
            <span class="citation"> [citation here] </span>
            <span class="year"> [year here] </span>
        </p>
*/

function randomRGB() {
  return Math.floor(Math.random() * 266);
}

var red = randomRGB();
var green = randomRGB();
var blue = randomRGB();
var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";


// printQuote function
function printQuote () {
    let selectedQuote = getRandomQuote();

    let html = '<p class="quote">' + selectedQuote.quote + '</p>' 
                + '<p class="source">' + selectedQuote.source + 
                
                '</p>';
    
     document.body.style.backgroundColor = rgbColor;
    document.getElementById('quote-box').innerHTML = html;
}

printQuote();
