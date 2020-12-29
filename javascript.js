var links = [
  'survey1',
  'survey2',
  'survey3'
]

function randomLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  document.getElementsById("link").innerHTML = links[randomNumber];
}

