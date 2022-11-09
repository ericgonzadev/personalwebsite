// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = "I'm adept with a majority of web development frameworks such as Ruby on Rails, Django, and Laravel. I'm usually working on both fronts of a web application, being the front-end and back-end. I have experience setting up and maintaining web apps to industry standards with tools such as Git, AWS, Travis-Cl, Heroku, etc. All my work experience can be found below.";
  var speed = 25;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }
  setTimeout(typeItOut, 200);
}
