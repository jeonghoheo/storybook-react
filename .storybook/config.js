import { configure } from "@storybook/react";

const req = require.context("../src", true, /\.stories\.(js|jsx)$/);

const loadStories = () => {
  req.keys().forEach(filename => {
    req(filename);
  });
};

configure(loadStories, module);
