const hello = document.querySelector("#l4");

const goto = () => {
  // Add the fade-out class to start animation
  document.body.classList.add("fade-out");

  // After 600ms (same as CSS animation duration), redirect
  setTimeout(() => {
    window.location.href = "project.html";
  }, 600);
};

// Add event listener when user clicks "project"
hello.addEventListener("click", goto);


const hello1 = document.querySelector("#bhumik");

const got1 = () => {
  // Add the fade-out class to start animation
  document.body.classList.add("fade-out");

  // After 600ms (same as CSS animation duration), redirect
  setTimeout(() => {
    window.location.href = "about.html";
  }, 600);
};

// Add event listener when user clicks "project"
hello1.addEventListener("click", got1);

