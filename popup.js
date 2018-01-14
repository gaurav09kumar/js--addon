var temp = document.getElementById("temp");

var data = null;

var xhr = new XMLHttpRequest();


xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    var data = JSON.parse(this.responseText);
    var t = data.main.temp;

    var t_1=document.createTextNode(t);
    temp.appendChild(t_1);
  }
});

xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=4a4d3f0bec8765937916cc933ec5fc3e&units=metric");
xhr.setRequestHeader("appid", "4a4d3f0bec8765937916cc933ec5fc3e");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send(data);
