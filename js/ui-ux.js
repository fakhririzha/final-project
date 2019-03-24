function xhttp() {

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "json/app.json", true);

  xhttp.onload = () => {
    if (xhttp.readyState === xhttp.DONE) {
      if (xhttp.status === 200) {

        // DO THE DOM THING HERE

      }
    }
  }

  xhttp.send(null);
}

window.onload = () => {

  window.addEventListener("scroll", () => {
    var wScroll = window.scrollY;

    // document.getElementById("gambar").style.transform = `translate(0px, -${wScroll / 100}%)`;

    console.log(wScroll);
  });
}
