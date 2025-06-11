function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");
  const isOpen = content.classList.contains("open");

  // Close all other accordions
  document.querySelectorAll(".accordion-content").forEach((item) => {
    if (item !== content) {
      item.classList.remove("open");
    }
  });

  // Reset all icons
  document.querySelectorAll("button svg").forEach((svg) => {
    if (svg !== icon) {
      svg.classList.remove("rotate-180");
      // Change plus icons back to plus
      const path = svg.querySelector("path");
      if (
        path &&
        path.getAttribute("d").includes("M12 6v6m0 0v6m0-6h6m-6 0H6")
      ) {
        path.setAttribute("d", "M12 6v6m0 0v6m0-6h6m-6 0H6");
      }
    }
  });

  // Toggle current accordion
  if (isOpen) {
    content.classList.remove("open");
    icon.classList.remove("rotate-180");
    // Change to plus icon
    const path = icon.querySelector("path");
    path.setAttribute("d", "M12 6v6m0 0v6m0-6h6m-6 0H6");
  } else {
    content.classList.add("open");
    icon.classList.add("rotate-180");
    // Change to minus/chevron icon
    const path = icon.querySelector("path");
    path.setAttribute("d", "M19 9l-7 7-7-7");
  }
}
console.log("Accordion script loaded successfully.");
