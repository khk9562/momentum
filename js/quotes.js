const quotes = [
    {
        quote : "Some men are born posthumously.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "When virtue has slept, she will get up more refreshed.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "The habit of intellectual principles without reasons is called faith.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "The most perfidious way of harming a cause consists of defending it deliberately with faulty arguments.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "You need chaos in your soul to give birth to a dancing star.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "What we once did 'for the sake of God' we now do for the sake of money.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "Believe me: the secret for harvesting from existence the greatest fruitfulness and greatest enjoyment is - to live dangerously.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "Out of passions grow opinions, mental sloth lets these rigidify into convictions.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "The higher a man gets, the smaller he seems to those who cannot fly.",
        author : "Friedrich Wilhelm Nietzsche",
    },
    {
        quote : "A casual stroll through the lunatic asylum shows that faith does not prove anything.",
        author : "Friedrich Wilhelm Nietzsche",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;