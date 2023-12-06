//* variabiles

const notifications = document.getElementById("notifications");
const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("text");
const projectLike = document.querySelectorAll(".like");
const shareBtn = document.getElementById("btn-share");
const sharedMessage = document.getElementById("shared-message");
//> Woth with fa-solid and fa-regular

//> functions

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
