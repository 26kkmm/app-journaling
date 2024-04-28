function resizeTextarea() {
  const textarea = document.getElementById("text");
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

// testing