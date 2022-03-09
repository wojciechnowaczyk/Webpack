import Heading from "./components/heading/heading";
import DogImage from "./components/dog-image/dog-image";
import _ from "lodash";
import React from "react";
const heading = new Heading();
heading.render("Dog");

const dogImage = new DogImage();
dogImage.render();
