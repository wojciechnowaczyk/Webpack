import HelloWordlButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";

const helloWordlButton = new HelloWordlButton();
helloWordlButton.render();

const heading = new Heading();
heading.render();

if (process.env.NODE_ENV === "production") {
  console.log("prod");
} else if (process.env.NODE_ENV === "development") {
  console.log("dev");
}
