// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = "I'm adept with a majority of web development frameworks such as Django and Ruby on Rails. I usually work on both fronts of a web application and have no issues jumping back the front-end and back-end. I have experience setting up and maintaining web apps to industry standards with tools such as Git, AWS, Testing Services (Sentry, Papertrail), Heroku, Google Services, etc. All my work experience can be found below.";
  var speed = 20;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }
  setTimeout(typeItOut, 200);
}
