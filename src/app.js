//* variabiles

const notifications = document.getElementById("notifications");
const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("text");
const projectLike = document.querySelectorAll(".like");
//> Woth with fa-solid and fa-regular

//> functions

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

projectLike.forEach((project) => {
  project.addEventListener("click", likeAProjectAnimation);
});
