function generateRandomHexCode() {
  let hexCode = "#";

  while (hexCode.length < 7) {
    hexCode += Math.round(Math.random() * 15).toString(16);
  }

  return hexCode;
}

const body = document.querySelector("body");

console.log(window);

addEventListener("scroll", event => {
  const scrollY = window.scrollY;
  if (scrollY < 5) {
    body.style.backgroundColor = generateRandomHexCode();
  }
});
