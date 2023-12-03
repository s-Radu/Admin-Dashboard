//* variabiles

const notifications = document.getElementById("notifications");

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

//< events

notifications.addEventListener("click", notificationsBell);
