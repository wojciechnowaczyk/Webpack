import Dog from "./dog.jpg";
import "./dog-image.css";
class DogImage {
  render() {
    const img = document.createElement("img");
    img.src = Dog;
    img.alt = "Dog Img";
    img.classList.add("dog-image");

    const bodyDomElement = document.querySelector("body");
    bodyDomElement.appendChild(img);
  }
}

export default DogImage;
