//* variabiles

const notifications = document.getElementById("notifications");
const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("text");
const projectLike = document.querySelectorAll(".like");
const shareBtn = document.getElementById("btn-share");
const sharedMessage = document.getElementById("shared-message");
const newProject = document.getElementById("btn-new");

//> functions

function newProjectFunction() {
  const projectWrapper = document.getElementById("project-wrapper");
  const title = prompt("What's the project title?");
  const description = prompt("The project description?");

  const newProjectHTML = `<div class="rounded-2xl border-l-4 border-l-orange-400 bg-slate-600 flex flex-col justify-between">
    <div>
      <h2 class="font-montserat ml-2 text-4xl m-4">${title}</h2>
      <p class="font-montserat ml-2 text-lg indent-2 m-4">${description}</p>
    </div>
    <div class="grid-cols-1 grid place-items-end grid-flow-col gap-4 m-4">
      <i class="fa-regular fa-star text-2xl like cursor-pointer"></i>
      <i class="fa-regular fa-eye text-2xl cursor-pointer"></i>
      <i class="fa-solid fa-code-fork text-2xl cursor-pointer"></i>
    </div>
  </div>`;
  projectWrapper.insertAdjacentHTML("beforeend", newProjectHTML);
}

function shared() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      sharedMessage.classList.toggle("active");
      setTimeout(() => {
        sharedMessage.classList.toggle("active");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

function notificationsBell() {
  if (notifications.classList.contains("fa-bell-slash")) {
    alert("notifications are on");
    notifications.classList.remove("fa-bell-slash");
    notifications.classList.add("fa-bell");
  } else {
    alert("notifications are off");
    notifications.classList.remove("fa-bell");
    notifications.classList.add("fa-bell-slash");
  }
}

function mouseEnter(e) {
  if (e.target.classList.contains("fa-bell-slash")) {
    e.target.classList.add("fa-bell");
    e.target.classList.remove("fa-bell-slash");
  }
}

function mouseLeave(e) {
  if (e.target.classList.contains("fa-bell")) {
    e.target.classList.add("fa-bell-slash");
    e.target.classList.remove("fa-bell");
  }
}

function search(e) {
  console.log(searchInput.value);
  searchInput.value = "";
  e.preventDefault();
}

function likeAProjectAnimation(e) {
  if (e.target.classList.contains("fa-regular")) {
    e.target.classList.add("fa-solid");
    e.target.classList.remove("fa-regular");
  } else {
    e.target.classList.add("fa-regular");
    e.target.classList.remove("fa-solid");
  }
}

//< events

notifications.addEventListener("click", notificationsBell);
notifications.addEventListener("mouseenter", mouseEnter);
notifications.addEventListener("mouseleave", mouseLeave);

searchBtn.addEventListener("click", search);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search(e);
  }
});

projectLike.forEach((project) => {
  project.addEventListener("click", likeAProjectAnimation);
});

shareBtn.addEventListener("click", shared);

newProject.addEventListener("click", newProjectFunction);
