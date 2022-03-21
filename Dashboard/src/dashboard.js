import NavigationBar from "./components/navigation-bar/navigation-bar.js";

const url = window.location.pathname;

const navigationItems = [
  {
    url: "/hello-world-page",
    title: "Hello World",
  },
  {
    url: "/kiwi-page",
    title: "Kiwi",
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWordlPage = new HelloWorldPage();
    helloWordlPage.render();
  });
} else if (url === "/kiwi-page") {
  console.log("kiwi");
  import("KiwiApp/KiwiPage").then((KiwiPageModule) => {
    const KiwiPage = KiwiPageModule.default;
    const kiwiPage = new KiwiPage();
    kiwiPage.render();
  });
}
