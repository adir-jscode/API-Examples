const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
    .then(data=>displayQuotes(data))
}

const displayQuotes = (quotes) => {
    console.log(quotes);
    const quote = document.getElementById('quotes');
    const h2 = document.createElement('h2');
    h2.innerText = quotes.quote;
    quote.appendChild(h2);

}