import "./heading.scss";

class Heading {
  render(pageName) {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = "Webpack course This is " + pageName + " page";
    body.appendChild(h1);
  }
}

export default Heading;
