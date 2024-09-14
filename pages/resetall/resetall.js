function animate() {
  var char = document.getElementById("char").src;
  switch (char) {
    case "/images/resetall/char/f3.png":
      char = "/images/resetall/char/f1.png";
    case "/images/resetall/char/f2.png":
      char = "/images/resetall/char/f3.png";
    case "/images/resetall/char/f1.png":
      char = "/images/resetall/char/f2.png";
  }
  document.getElementById('char').src = char;

  setInterval(animate, 500);
}

animate();
