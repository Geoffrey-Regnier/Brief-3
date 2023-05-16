document.addEventListener("DOMContentLoaded", function() {
  var currentCount = localStorage.getItem("visitCount");

  if (currentCount) {
      currentCount = parseInt(currentCount) + 1;
  } else {
      currentCount = 1;
  }

  document.getElementById("counter").textContent = currentCount;

  localStorage.setItem("visitCount", currentCount.toString());
});