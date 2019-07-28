import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Header from "../components/Header";

const stories = storiesOf("TodoApp", module);

stories.add("Header", () => (
  <div className="todoApp">
    <Header addTodo={() => {}} />
  </div>
));
