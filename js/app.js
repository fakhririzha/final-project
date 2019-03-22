function xhttp() {

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "json/app.json", true);

  xhttp.onload = () => {
    if (xhttp.readyState === xhttp.DONE) {
      if (xhttp.status === 200) {
        // console.log(xhttp.response);
        console.log(xhttp.responseText);
        let json = JSON.parse(xhttp.response);
        document.getElementById("result").innerHTML = json.schema;
      }
    }
  }

  xhttp.send(null);
}

