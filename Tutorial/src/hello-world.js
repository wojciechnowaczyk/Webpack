import HelloWordlButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import React from "react";

const helloWordlButton = new HelloWordlButton();
helloWordlButton.render();

const heading = new Heading();
heading.render("hello");

if (process.env.NODE_ENV === "production") {
  console.log("prod");
} else if (process.env.NODE_ENV === "development") {
  console.log("dev");
}
