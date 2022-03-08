import Dog from "./dog.jpg";
import AltText from "./altText.txt";

function addImage() {
  const img = document.createElement("img");
  img.alt = AltText;
  img.width = 300;
  img.src = Dog;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
