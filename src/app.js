//* variabiles

const notifications = document.getElementById("notifications");
const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("text");
const shareBtn = document.getElementById("btn-share");
const sharedMessage = document.getElementById("shared-message");
const newProject = document.getElementById("btn-new");
const projectWrapper = document.getElementById("project-wrapper");

//> functions

function newProjectFunction() {
  //TODO add check for null imputs -- Done

  const title = prompt("What's the project title?");
  const description = prompt("The project description?");
  if (
    title === null ||
    description === null ||
    title === "" ||
    description === ""
  ) {
    alert("No project has been added since the title or description is empty");
    return;
  }

  const newProjectHTML = `<div class="project rounded-2xl border-l-4 border-l-orange-400 bg-slate-600 flex flex-col justify-between">
    <div>
      <h2 class="project-title font-montserat ml-2 text-4xl m-4">${title}</h2>
      <p class="project-description font-montserat ml-2 text-lg indent-2 m-4">${description}</p>
    </div>
    <div class="grid-cols-1 grid place-items-end grid-flow-col gap-4 m-4">
      <i class=" fa-regular fa-star text-2xl like cursor-pointer"></i>
      <i class="fa-regular fa-eye text-2xl cursor-pointer"></i>
      <i class="fa-solid fa-code-fork text-2xl cursor-pointer"></i>
    </div>
  </div>`;

  projectWrapper.insertAdjacentHTML("beforeend", newProjectHTML);

  //* Save the newly added projects to the local storage

  let projects = localStorage.getItem("projects");
  projects = projects ? JSON.parse(projects) : [];
  projects.push({ title, description });
  localStorage.setItem("projects", JSON.stringify(projects));
}
//> Keep the projects in the local storage

window.onload = function () {
  let projects = localStorage.getItem("projects");
  projects = projects ? JSON.parse(projects) : [];
  // Add the original projects to the projects array

  const originalProjects = Array.from(
    document.querySelectorAll(".project")
  ).map((project) => {
    const title = project.querySelector(".project-title").textContent;
    const description = project.querySelector(
      ".project-description"
    ).textContent;
    const liked = project.querySelector(".like").classList.contains("fa-solid");
    return { title, description, liked };
  });

  projects.forEach((project) => {
    const likeClass = project.liked ? "fa-solid" : "fa-regular";
    const newProjectHTML = `<div class="project rounded-2xl border-l-4 border-l-orange-400 bg-slate-600 flex flex-col justify-between">
    <div>
      <h2 class="project-title font-montserat ml-2 text-4xl m-4">${project.title}</h2>
      <p class="project-description font-montserat ml-2 text-lg indent-2 m-4">${project.description}</p>
    </div>
    <div class="grid-cols-1 grid place-items-end grid-flow-col gap-4 m-4">
      <i class=" ${likeClass} fa-star text-2xl like cursor-pointer"></i>
      <i class="fa-regular fa-eye text-2xl cursor-pointer"></i>
      <i class="fa-solid fa-code-fork text-2xl cursor-pointer"></i>
    </div>
  </div>`;

    projectWrapper.insertAdjacentHTML("beforeend", newProjectHTML);
  });
  projects = [...projects, ...originalProjects];
};

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
  //todo resolve the conflict between two events -- deleted the other functions for hover / aka done
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

searchBtn.addEventListener("click", search);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search(e);
  }
});

shareBtn.addEventListener("click", shared);

newProject.addEventListener("click", newProjectFunction);

//> Like a project event that will also recognise the newly added projects

projectWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("like")) {
    likeAProjectAnimation(e);
  }
  // Get the project title
  const title = e.target
    .closest(".rounded-2xl")
    .querySelector(".project-title").textContent;

  // Update the liked status in localStorage
  let projects = localStorage.getItem("projects");
  projects = projects ? JSON.parse(projects) : [];
  const project = projects.find((project) => project.title === title);
  if (project) {
    project.liked = !project.liked;
    localStorage.setItem("projects", JSON.stringify(projects));
  }
});
