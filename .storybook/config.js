import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories");
  require("../src/index.css");
    require('../src/index.js');
}

configure(loadStories, module);
