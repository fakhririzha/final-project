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

const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function () {

  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 400;
  }

  setTimeout(() => this.type(), typeSpeed);
};


document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
