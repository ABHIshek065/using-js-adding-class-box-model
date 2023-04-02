

let knowMoreStatus = false;

let clickBtn = document.getElementById("clickbtn");
let backBtn = document.getElementById("backBtn");

function checkknowMoreStatus() {
  if (knowMoreStatus == true) {
    clickBtn.style.display = "none";
    backBtn.style.display = "block";
  } else {
    clickBtn.style.display = "block";
    backBtn.style.display = "none";
  }
}

function knowMore() {
  knowMoreStatus = true;
  let knowContainer = document.getElementById("more");
  knowContainer.classList.add("more");
  knowContainer.style.display = 'block'
  checkknowMoreStatus();
}
function GoBack() {
  knowMoreStatus = false;
  let knowContainer = document.getElementById("more");
  knowContainer.classList.remove("more");
  knowContainer.style.display = 'none'
  checkknowMoreStatus();
}
