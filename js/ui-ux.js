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
