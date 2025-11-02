// منوی همبرگر - بستن خودکار پس از کلیک روی لینک
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const navLinks = document.querySelectorAll("nav a");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  // انیمیشن همبرگر
  burger.style.transform = mobileNav.classList.contains("hidden") 
    ? "rotate(0deg)" 
    : "rotate(90deg)";
});

// بستن منو هنگام کلیک روی لینک (در موبایل)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      mobileNav.classList.add("hidden");
      burger.style.transform = "rotate(0deg)";
    }
  });
});

// لینک فعال هنگام اسکرول
const sections = document.querySelectorAll("section");

function updateActiveNav() {
  let current = "";
  const scrollPos = window.pageYOffset + 150;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollPos >= top && scrollPos < top + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// بهینه‌سازی اسکرول با throttling
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveNav();
      ticking = false;
    });
    ticking = true;
  }
});

// اجرای اولیه
updateActiveNav();

// انیمیشن کارت‌ها هنگام اسکرول
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// اضافه کردن انیمیشن به کارت‌ها
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});
