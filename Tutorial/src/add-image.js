import Dog from "./dog.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "Dog";
  img.width = 300;
  img.src = Dog;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
