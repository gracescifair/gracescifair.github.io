var links = [
  'https://osu.az1.qualtrics.com/jfe/form/SV_6tKGrSmavQevpz0',
  'https://osu.az1.qualtrics.com/jfe/form/SV_6tKGrSmavQevpz0'
]

function randomLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  document.getElementsByTagName("a")[0].setAttribute("href", links[randomNumber]);
}

