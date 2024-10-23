const apaBtn = document.querySelector(".apa");
const gamauBtn = document.querySelector(".gamau");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");



// Show question 2 when the "Apa?" button is clicked
apaBtn.addEventListener("click", () => {
  question1.classList.add("hidden");  // Hide the first question
  question2.classList.remove("hidden");  // Show the second question
});

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  // Select elements in the currently visible question (question2)
  console.log("Yes button clicked!");
  const currentQuestion = question2.querySelector(".question");
  const currentGif = question2.querySelector(".gif");

  currentQuestion.innerHTML = "I Love you more Echa."; // Update the question text
  currentGif.src = "https://media.tenor.com/ejMtbLv7H-gAAAAi/panda-bear-brown-bear.gif"; // Update the GIF source

});


noBtn.addEventListener("click", () => {
// Select elements in the currently visible question (question2)
  console.log("No button clicked!");
  const currentQuestion = question2.querySelector(".question");
  const currentGif = question2.querySelector(".gif");

  currentQuestion.innerHTML = "kok gitu :(."; // Update the question text
  currentGif.src = "https://media.tenor.com/Q9VuGIKQqEMAAAAi/love-bear.gif"; // Update the GIF source

});

// Make the No button move randomly on hover
gamauBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const gamauBtnRect = gamauBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - gamauBtnRect.width;
  const maxY = wrapperRect.height - gamauBtnRect.height;

  // Ensure no negative values for positioning
  const randomX = Math.max(0, Math.floor(Math.random() * maxX));
  const randomY = Math.max(0, Math.floor(Math.random() * maxY));

  // Move the "No" button to a random position
  gamauBtn.style.position = "absolute";  // Change position to absolute when it starts moving
  gamauBtn.style.left = randomX + "px";
  gamauBtn.style.top = randomY + "px";
});