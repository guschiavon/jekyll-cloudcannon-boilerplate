

// Chat bubble

const chatBubble = document.getElementById("chat-bubble");
const chatMenu = document.querySelector(".chat-menu");
chatBubble.addEventListener("click", function () {
  chatMenu.classList.toggle("open");
  chatBubble.classList.toggle("active");
});