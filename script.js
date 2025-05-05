var content = document.getElementById("content");
var button = document.getElementById("show_more");

button.onclick = function() {

    if(content.className == "expanded") {
        //Shrink the box
        content.className = "";

        button.innerHTML = "Show More";
    }
    else {
        //Expand the box
        content.className = "expanded";

        button.innerHTML = "Show Less";
    }
}

button.onmouseover = function() {
    button.style.cursor = "pointer";
    button.style.backgroundColor = "lightblue";
}

button.onmouseout = function() {
    button.style.cursor = "default";

    if(content.className == "expanded") {
    button.style.backgroundColor = "#660303d8";
}
    else {
        button.style.backgroundColor = "green";
    }}

    const images = ["pexels-emma-bauso-1183828-2253879.jpg", "pexels-vidalbalielojrfotografia-1682497.jpg", "pexels-panditwiguna-1128317.jpg", "pexels-caleboquendo-3038369.jpg", "pexels-eleanor-gwen-stewart-869603-1766696.jpg", "pexels-caleboquendo-3038455.jpg"];
    let currentIndex = 0;
    const slideshow = document.getElementById("slideshow");
    const container2 = document.getElementById("container2");
    const button2 = container2.querySelector("button");

    button2.textContent = "Change Border Color";
    button2.style.padding = "10px 20px";
    button2.style.fontSize = "16px";
    button2.style.cursor = "pointer";
    button2.style.marginTop = "10px";

    button2.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    slideshow.style.borderColor = randomColor;
    button2.style.backgroundColor = randomColor;
    button2.style.color = "#fff";
    });

    setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
    slideshow.style.transition = "opacity 0.7s ease-in-out";
    slideshow.style.height = "300px";
    }, 3000);

    const form = document.getElementById("myForm");
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("formMessage");

  if (!email.includes("@")) {
    message.textContent = "Invalid email format!";
  } else if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters!";
  } else {
    message.textContent = "Form submitted successfully!";
  }
});

    