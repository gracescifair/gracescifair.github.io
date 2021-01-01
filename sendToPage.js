var links = [
  'https://docs.google.com/forms/d/e/1FAIpQLSc0R6Drq0GDj6g3jK1LGlyXEpviKeXcT_XigunqIcNnvQVLeQ/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLScR8YMeGLGIwT4ZpQIXcBozHb4sKvSR19bwBxp_dHUj4GWeOg/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSf8gIV7S3FzHtW9BDokd6SNl-VqA_-B1jXWXh8jQx2wj26fOQ/viewform?usp=sf_link'
]

function randomLink() {
  var randomNumber = Math.floor(Math.random() * (links.length));
  document.getElementsByTagName("a")[0].setAttribute("href", links[randomNumber]);
}

