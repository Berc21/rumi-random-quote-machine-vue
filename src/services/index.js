const APIENPOINT = "https://rumi-quote-api.glitch.me/quote"


export default function getQuote() {
  return fetch(APIENPOINT)
    .then(res => res.json())
}
