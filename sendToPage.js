var links = [
  'https://osu.az1.qualtrics.com/jfe/form/SV_6DrQCK5cxX8Rnx4',
  'https://osu.az1.qualtrics.com/jfe/form/SV_8pNI05SIvRnP3W6'
]

function randomLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  document.getElementsByTagName("a")[0].setAttribute("href", links[randomNumber]);
}

