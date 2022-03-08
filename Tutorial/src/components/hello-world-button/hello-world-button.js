import "./hello-world-button.scss";

class HelloWordlButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hi World";
    button.classList.add("hello-world-button");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWordlButton;