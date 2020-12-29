var links = [
  'https://gracescifair.github.io/survey1',
  'https://gracescifair.github.io',
  'https://gracescifair.github.io'
]

function randomLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  documents.getElementById('link').innerHTML = links[randomNumber];
}

