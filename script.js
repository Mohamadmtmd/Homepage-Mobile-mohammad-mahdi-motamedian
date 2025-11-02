// منوی همبرگر (کار می‌کند روی موبایل و دسکتاپ)
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// لینک فعال هنگام اسکرول
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if(pageYOffset >= top) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});
