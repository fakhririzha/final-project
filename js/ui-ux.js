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

$('.carousel').carousel({
  ride: true,
  interval: 1500
});

window.onload = () => {

  window.addEventListener("scroll", () => {
    let wScroll = window.scrollY;
    let body = document.querySelector("body");
    let nav = document.querySelector("nav");
    let logo = document.querySelector(".logo-nav");

    if (wScroll > 0) {
      nav.classList.add("nav-scrolled");
      logo.classList.add("logo-nav-white");
    } else {
      nav.classList.remove("nav-scrolled");
      logo.classList.remove("logo-nav-white");
    }
  });
}
