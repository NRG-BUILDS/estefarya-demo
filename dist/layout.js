fetch("./footer.html")
  .then((response) => response.text())
  .then((html) => {
    const container = document.getElementById("footer-container");
    container.insertAdjacentHTML("beforeend", html);
  });
