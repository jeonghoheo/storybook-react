import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2019, 0, 7, 2, 9)
};

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

const stories = storiesOf("Task", module);

stories
  .add("기본", () => <Task task={task} {...actions} />)
  .add("고정됨", () => (
    <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
  ))
  .add("완료", () => (
    <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
  ));
