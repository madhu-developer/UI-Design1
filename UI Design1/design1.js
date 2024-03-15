document.getElementById("main").classList.add("body");

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let myPlot = document.getElementById("myplot");
const xArray = ["Total Units", "Completed", "In Progrss", "Not Yet Started"];
const yArray = [100, 60, 30, 10];

const layout = {title:"Production Progress", paper_bgcolor: 'lightgrey',borderRadius:"15px"};

const data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);