var links = [
  'https://gracescifair.github.io/survey1',
  'https://gracescifair.github.io/survey2',
  'https://gracescifair.github.io/survey3'
]

function randomLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  documents.innerHTML = $('a[href="link"]').text(); = links[randomNumber];
}

