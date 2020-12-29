var links = [
  'survey1',
  'survey2',
  'survey3'
]

function randomLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  document.getElementById('link').innerHTML = links[randomNumber];
}

