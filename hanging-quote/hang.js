var text = getElementByClassName("quote");

if (text.search(/(&ldquo;|'|")/)) {
  var font = this.getPropertyValue('font-size');
  this.style
}


var text = $('p');

if $(text).text().match(/(&ldquo;|'|")/) {
  var font = this.css('font-size');
  $(this).attr(':first-letter').css('margin-left', font);
}