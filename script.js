const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("typing-animation");
    } else {
      entry.target.classList.remove("typing-animation");
    }
  });
});

const h1Elements = document.querySelectorAll("h1");
h1Elements.forEach((h1) => {
  observer.observe(h1);
});
