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

let activeDropdown = null;
let mobileMenuOpen = false;

// Desktop dropdown functionality
function toggleDropdown(dropdownName) {
  const menu = document.getElementById(dropdownName + "-menu");
  const arrow = document.getElementById(dropdownName + "-arrow");

  // Close other dropdowns
  if (activeDropdown && activeDropdown !== dropdownName) {
    const otherMenu = document.getElementById(activeDropdown + "-menu");
    const otherArrow = document.getElementById(activeDropdown + "-arrow");
    otherMenu.classList.remove("show");
    otherArrow.classList.remove("rotate-180");
  }

  // Toggle current dropdown
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    arrow.classList.remove("rotate-180");
    activeDropdown = null;
  } else {
    menu.classList.add("show");
    arrow.classList.add("rotate-180");
    activeDropdown = dropdownName;
  }
}

// Navbar scroll functionality
function updateNavbar() {
  const navbar = document.getElementById("navbar");
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  // Elements to update
  const navbarTexts = document.querySelectorAll(".navbar-text");
  const navbarLinks = document.querySelectorAll(".navbar-link");
  const navbarLinkActives = document.querySelectorAll(".navbar-link-active");
  const bookBtn = document.getElementById("book-btn");

  if (scrollY > viewportHeight) {
    // Scrolled past 100vh - solid navbar
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-white");

    // Update text colors to dark
    navbarTexts.forEach((el) => {
      el.classList.remove("text-white");
      el.classList.add("text-dark");
    });

    navbarLinks.forEach((el) => {
      el.classList.remove("text-white");
      el.classList.add("text-dark");
    });

    navbarLinkActives.forEach((el) => {
      el.classList.remove("text-white");
      el.classList.add("text-dark");
    });

    if (bookBtn) {
      bookBtn.classList.remove("text-white");
      bookBtn.classList.add("text-dark");
    }
  } else {
    // At top - transparent navbar
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-transparent");

    // Update text colors to white
    navbarTexts.forEach((el) => {
      el.classList.remove("text-dark");
      el.classList.add("text-white");
    });

    navbarLinks.forEach((el) => {
      el.classList.remove("text-dark");
      el.classList.add("text-white");
    });

    navbarLinkActives.forEach((el) => {
      el.classList.remove("text-dark");
      el.classList.add("text-white");
    });

    if (bookBtn) {
      bookBtn.classList.remove("text-dark");
      bookBtn.classList.add("text-white");
    }
  }
}

// Initialize navbar state
document.addEventListener("DOMContentLoaded", function () {
  updateNavbar();
});

// Listen for scroll events
window.addEventListener("scroll", updateNavbar);

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  mobileMenuOpen = !mobileMenuOpen;

  if (mobileMenuOpen) {
    mobileMenu.classList.add("show");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    mobileMenu.classList.remove("show");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Mobile dropdown functionality
function toggleMobileDropdown(dropdownName) {
  const menu = document.getElementById(dropdownName + "-menu");
  const arrow = document.getElementById(dropdownName + "-arrow");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    arrow.classList.add("rotate-180");
  } else {
    menu.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }
}

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  const treatmentsDropdown = document.getElementById("treatments-dropdown");
  const langDropdown = document.getElementById("lang-dropdown");

  if (!treatmentsDropdown.contains(event.target)) {
    const menu = document.getElementById("treatments-menu");
    const arrow = document.getElementById("treatments-arrow");
    menu.classList.remove("show");
    arrow.classList.remove("rotate-180");
    if (activeDropdown === "treatments") activeDropdown = null;
  }

  if (!langDropdown.contains(event.target)) {
    const menu = document.getElementById("lang-menu");
    const arrow = document.getElementById("lang-arrow");
    menu.classList.remove("show");
    arrow.classList.remove("rotate-180");
    if (activeDropdown === "lang") activeDropdown = null;
  }
});

// Handle escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
    if (activeDropdown) {
      const menu = document.getElementById(activeDropdown + "-menu");
      const arrow = document.getElementById(activeDropdown + "-arrow");
      menu.classList.remove("show");
      arrow.classList.remove("rotate-180");
      activeDropdown = null;
    }
  }
});
