import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./TaskList";
import { withPinnedTasks } from "./TaskList.stories";

it("리스트의 처음부분에서 고정된 tasks들을 렌더한다.", () => {
  const div = document.createElement("div");
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  ReactDOM.render(<TaskList tasks={withPinnedTasks} {...events} />, div);

  // 우리는 "Task 6 (pinned)"가 리스트의 끝이 아닌 첫번째에 렌더링 될거라고 기대한다.
  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
