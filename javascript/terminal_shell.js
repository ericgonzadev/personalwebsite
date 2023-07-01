// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = "I possess expertise in a wide range of web development frameworks such as Django and Ruby on Rails. With a comprehensive understanding of both front-end and back-end development, I can seamlessly navigate between the two with ease. Throughout my experience, I have successfully established and maintained web applications that adhere to industry standards with tools such as Git, AWS, Testing Services (Sentry, Papertrail), Heroku, Google Services, and more. For a detailed overview of my work experience, please refer to the section below.";
  var speed = 5;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }
  setTimeout(typeItOut, 200);
}
