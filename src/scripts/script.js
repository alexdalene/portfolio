let callback = (entries, observer) => {
  entries.forEach((entry) => {
    addClass(entry);
  });
};

let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 0.5,
};

let observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".projects");

observer.observe(target);

function addClass(entry) {
  const projectLink = document.querySelector("#project-link");
  const homeLink = document.querySelector("#home-link");

  if (entry.isIntersecting) {
    homeLink.classList.remove("active");
    projectLink.classList.add("active");
  } else {
    projectLink.classList.remove("active");
    homeLink.classList.add("active");
  }
}
